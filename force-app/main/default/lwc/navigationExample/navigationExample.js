// navigationToPagesExample.js
import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationToPagesExample extends NavigationMixin(LightningElement) {


    openLWCDoc() {
        // Navigate to the Case object home page.
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
               url:"https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.use_navigate_page_types"
            }
        });
    }
    openAccountHome() {
        
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        });
    }

    createNewContact() {
       
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }

    openOppListView() {
        
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'list'
            }
        });
    }

    openCaseRecord() {
       
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '5005g00000EiYVUAA3',
                objectApiName: 'Case', // objectApiName is optional
                actionName: 'view'
            }
        });
    }

    openAppPage() {
       
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName:'Output'
            }
        });
    }

    

    navigateToTabPage() {
        // Navigate to a specific CustomTab.
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                // CustomTabs from managed packages are identified by their
                // namespace prefix followed by two underscores followed by the
                // developer name. E.g. 'namespace__TabName'
                apiName: 'CustomTabName'
            }
        });
    }

   
}