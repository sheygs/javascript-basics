const tabs = document.querySelector('.tabs');
const buttonTabs = tabs.querySelectorAll('[role="tab"]');
const PanelButtons = tabs.querySelectorAll('[role="tabpanel"]');

function handleTabClick(e){
 // hide all tabpanels
 PanelButtons.forEach(panels => {
   panels.hidden = true;
 })
 // mark all tabs as unselected
 buttonTabs.forEach(tab => {
   tab.setAttribute('aria-selected',false);
 })
 // mark the clicked tab as selected
 e.currentTarget.setAttribute('aria-selected', true);

 // find the associated tabpanel and show it
 const tabId = event.currentTarget.id;
 
 Array.from(PanelButtons).find(panel => {
   const panelId = panel.getAttribute('aria-labelledby');
   if (tabId === panelId){
    panel.hidden = false;
   }
 })
}

buttonTabs.forEach(button => button.addEventListener('click', handleTabClick));