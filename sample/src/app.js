export class App {
    configureRouter(config, router) {
        config.title = 'Kendo UI Samples';

        config.map([
        {
            route: ['','about'],
            moduleId: 'about/about',
            nav: true,
            title: 'About'
        },  {
            route: 'installation/:page',
            moduleId: './installation-wizard/wizard',
            name: 'install',
            href: '#/installation/begin',
            nav: true,
            title:'Installation wizard'
        },  {
            route: 'autocomplete',
            moduleId: 'autocomplete/index',
            nav: true,
            title: 'Autocomplete'
        },  {
            route: 'button',
            moduleId: 'button/index',
            nav: true,
            title: 'Button'
        },  {
            route: 'combobox',
            moduleId: 'combobox/index',
            nav: true,
            title: 'Combobox'
        },  {
            route: 'dropdownlist',
            moduleId: 'dropdownlist/index',
            nav: true,
            title: 'DropDownList'
        },  {
            route: 'grid',
            moduleId: 'grid/index',
            nav: true,
            title: 'Grid'
        }, {
            route: 'tabstrip',
            moduleId: 'tabstrip/index',
            nav: true,
            title: 'TabStrip'
        },]);

        this.router = router;
    }
}
