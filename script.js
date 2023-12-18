 document.addEventListener('DOMContentLoaded', function() {
            const cart = document.getElementById('cart');
            const totalElement = document.getElementById('total');

            // Écouter les clics sur les boutons dans le panier
            cart.addEventListener('click', function(e) {
                const target = e.target;

                // Gestion des clics sur les boutons "+" et "-"
                if (target.classList.contains('quantity-btn')) {
                    const item = target.closest('.item');
                    const quantityElement = item.querySelector('.quantity');
                    const currentQuantity = parseInt(quantityElement.textContent);
                    const action = target.getAttribute('data-action');
                    const newQuantity = action === 'increase' ? currentQuantity + 1 : Math.max(currentQuantity - 1, 0);

                    quantityElement.textContent = newQuantity;
                    updateTotal();
                }

                // Gestion des clics sur le bouton "Supprimer"
                if (target.classList.contains('remove-btn')) {
                    const item = target.closest('.item');
                    item.remove();
                    updateTotal();
                }

                // Gestion des clics sur le bouton en forme de cœur
                if (target.classList.contains('heart-btn')) {
                    target.classList.toggle('active');
                }
            });

            // Fonction pour mettre à jour le prix total
            function updateTotal() {
                let totalPrice = 0;

                document.querySelectorAll('.item').forEach(function(item) {
                    const quantity = parseInt(item.querySelector('.quantity').textContent);
                    // Ajoutez ici le prix de l'article (peut provenir d'une base de données)
                    const price = 10; // Remplacez par le prix réel de l'article

                    totalPrice += quantity * price;
                });

                totalElement.textContent = 'Prix total : ' + totalPrice.toLocaleString() + ' XOF' ;
            }

            // Mettez à jour le prix total au chargement initial de la page
            updateTotal();
 });