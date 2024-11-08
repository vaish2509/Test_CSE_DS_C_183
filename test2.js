function calculateTotal() {
  const price = 1500000;
  const quantity = document.getElementById('quantity').value;
  const total = price * quantity;
  
  document.getElementById('total').textContent = total;

  // Display alert with total cost
  alert(added);
}