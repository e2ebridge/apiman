describe('My First Test', () => {
    it('Creates initial Data', () => {
        login();
        createOrganization();
        createPlan();
        createApi();
        createClient();
    })
})

const login = () => {
    cy.visit('https://vagrantguest/pas/apimanui/api-manager/');
    cy.get('#username').type('bastian.gembalczyk');
    cy.get('#password').type('Start123$');
    cy.get('#kc-login').click();
}

const createOrganization = () => {
    //cy.visit('https://vagrantguest/pas/apimanui/api-manager/');
    cy.get('.row:nth-child(2) .dash-group:nth-child(1) .description').click();
    cy.get('#new-org').click();
    cy.get('.row:nth-child(3)').click();
    cy.get('#apiman-entityname').click();
    cy.get('#apiman-entityname').type('TestOrganization');
    cy.get('#apiman-description').click();
    cy.get('#apiman-description').type('Description of TestOrganization');
    cy.get('.btn-primary').click();
}


const createPlan = () => {
    cy.contains('New Plan').click();
    cy.get('#apiman-entityname').type('TestPlan');
    cy.get('#apiman-description').type('Description of TestPlan');
    cy.get('#create-plan').click();
    cy.contains('Lock Plan').click();
}


const createClient = () => {
    cy.visit('https://vagrantguest/pas/apimanui/api-manager/orgs/TestOrganization/clients');
    cy.contains('New Client').click();
    cy.get('#apiman-entityname').type('TestClient');
    cy.get('#apiman-description').click();
    cy.get('#apiman-description').type('Description of TestClient');
    cy.get('#create-client').click();
    cy.get('#tab-contracts').click();
    cy.get('.pull-right:nth-child(2)').click();
    cy.get('#api > span').click();
    cy.get('.apiman-form-control').click();
    cy.get('.apiman-form-control').type('TestApi');
    cy.get('.btn-search').click();
    cy.get('.ng-valid:nth-child(2)').submit();
    cy.get('.item').click();
    cy.get('.modal-footer > .btn-primary').click();
    cy.get('#create-contract').click();
    cy.contains('Register').click();

}


const createApi= () => {
    cy.visit('https://vagrantguest/pas/apimanui/api-manager/orgs/TestOrganization/apis');
    cy.get('.btn-primary:nth-child(1)').click();
    cy.get('#apiman-entityname').type('TestApi');
    cy.get('#apiman-description').click();
    cy.get('#apiman-description').type('Description of TestApi');
    cy.get('#create-api').click();
    cy.get('#tab-impl').click();
    cy.get('.apiman-form-control:nth-child(2)').click();
    cy.get('.apiman-form-control:nth-child(2)').type('https://petstore.swagger.io/v2/');
    cy.get('.btn-primary > span:nth-child(2)').click();
    cy.get('#tab-plans').click();
    cy.get('.col-sm-6 > .ng-pristine').click();
    cy.get('.actions > .btn-primary').click();
    cy.get('div:nth-child(3) > .btn:nth-child(1)').click();

}

