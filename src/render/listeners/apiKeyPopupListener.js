import { divMap } from "../../util/util.js";
import { myKey } from "../../state/stateManager.js";
export default async function addApiInputListeners() {
    if (myKey) {
        if (document.getElementById('apikeyfield')) {
            document.getElementById('apikeyfield').remove();
        }
    } else {
        document.getElementById('apikeyfield').addEventListener("submit", (e) => {
            e.preventDefault();
            state.mykey = divMap.apiKeyInput.value;
            divMap.apiKeyField.remove();
        });




        // Actual path to your API key page
        divMap.apiKeyLink.href = "https://www.torn.com/preferences.php#tab=api?step=addNewKey&title=TornAIDS&type=3";

        // Set up hover/touch events
        if (window.matchMedia('(hover: hover)').matches) {
            // Desktop with hover support
            divMap.apiNotification.addEventListener('mouseenter', showPopup);
            divMap.apiNotification.addEventListener('mouseleave', hidePopup);
        } else {
            // Mobile devices (tap to show)
            divMap.apiNotification.addEventListener('click', function (e) {
                e.preventDefault();
                togglePopup();
            });
        }

        // Close button click
        divMap.closeApiPopup.addEventListener('click', function (e) {
            e.stopPropagation();
            hidePopup();
        });

        async function showPopup() {
            divMap.apiNotificationPopup.classList.add('visible');
            divMap.notificationBadgeCount.style.backgroundColor = '#6366f1'; // Slightly lighter when active
        }

        async function hidePopup() {
            divMap.apiNotificationPopup.classList.remove('visible');
            divMap.notificationBadgeCount.style.backgroundColor = '#4f46e5'; // Original color
        }

        async function togglePopup() {
            if (divMap.apiNotificationPopup.classList.contains('visible')) {
                hidePopup();
            } else {
                showPopup();
            }
        }

        // Close when clicking outside on mobile
        document.addEventListener('click', function (e) {
            if (!divMap.apiNotification.contains(e.target) && divMap.apiNotificationPopup.classList.contains('visible')) {
                hidePopup();
            }
        });
    };
};