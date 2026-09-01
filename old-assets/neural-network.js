// ==================== NEURAL NETWORK BACKGROUND ANIMATION ====================
class NeuralNetwork {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.nodes = [];
    this.connections = [];
    this.nodeCount = 60; // Number of nodes (fewer for cleaner look)
    this.maxDistance = 200; // Maximum distance for connections (longer lines)
    this.mouse = { x: null, y: null, radius: 180 };
    
    this.init();
    this.animate();
    this.setupEventListeners();
  }
  
  init() {
    this.resize();
    this.createNodes();
  }
  
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  createNodes() {
    this.nodes = [];
    for (let i = 0; i < this.nodeCount; i++) {
      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 3 + 2 // Larger nodes (2-5px)
      });
    }
  }
  
  updateNodes() {
    this.nodes.forEach(node => {
      // Update position
      node.x += node.vx;
      node.y += node.vy;
      
      // Bounce off edges
      if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1;
      if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;
      
      // Keep within bounds
      node.x = Math.max(0, Math.min(this.canvas.width, node.x));
      node.y = Math.max(0, Math.min(this.canvas.height, node.y));
    });
  }
  
  drawNodes() {
    this.nodes.forEach(node => {
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = 'rgba(59, 130, 246, 0.9)'; // Bright Blue
      this.ctx.fill();
      
      // Add glow effect
      this.ctx.shadowBlur = 15;
      this.ctx.shadowColor = 'rgba(59, 130, 246, 0.6)';
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    });
  }
  
  drawConnections() {
    this.nodes.forEach((nodeA, i) => {
      this.nodes.slice(i + 1).forEach(nodeB => {
        const dx = nodeA.x - nodeB.x;
        const dy = nodeA.y - nodeB.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.maxDistance) {
          const opacity = (1 - distance / this.maxDistance) * 0.5;
          
          this.ctx.beginPath();
          this.ctx.moveTo(nodeA.x, nodeA.y);
          this.ctx.lineTo(nodeB.x, nodeB.y);
          this.ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`; // Blue lines
          this.ctx.lineWidth = 1.5; // Thicker lines
          this.ctx.stroke();
        }
      });
      
      // Connect to mouse if nearby
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = nodeA.x - this.mouse.x;
        const dy = nodeA.y - this.mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < this.mouse.radius) {
          const opacity = (1 - distance / this.mouse.radius) * 0.6;
          
          this.ctx.beginPath();
          this.ctx.moveTo(nodeA.x, nodeA.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.strokeStyle = `rgba(96, 165, 250, ${opacity})`; // Light Blue
          this.ctx.lineWidth = 2; // Thicker mouse lines
          this.ctx.stroke();
          
          // Enlarge node near mouse
          this.ctx.beginPath();
          this.ctx.arc(nodeA.x, nodeA.y, nodeA.radius * 1.8, 0, Math.PI * 2);
          this.ctx.fillStyle = `rgba(96, 165, 250, ${opacity})`;
          this.ctx.fill();
        }
      }
    });
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.updateNodes();
    this.drawConnections();
    this.drawNodes();
    
    requestAnimationFrame(() => this.animate());
  }
  
  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createNodes();
    });
    
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.x;
      this.mouse.y = e.y;
    });
    
    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }
}

// Initialize neural network background
window.addEventListener('load', () => {
  const canvas = document.getElementById('neuralNetwork');
  if (canvas) {
    new NeuralNetwork(canvas);
  }
});
