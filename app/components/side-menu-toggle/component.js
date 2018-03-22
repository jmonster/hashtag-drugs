import SideMenuToggle from 'ember-side-menu/components/side-menu-toggle';

export default SideMenuToggle.extend({
    tagName: 'button',
    classNames: ['hamburger', 'hamburger--elastic', 'navbar-toggler'],
    classNameBindings: ['isActive'],
    attributeBindings: ['type', 'ariaExpanded:aria-expanded', 'ariaLabel:aria-label', 'ariaControls:aria-controls'],
    ariaLabel: 'Menu',
    ariaExpanded: Ember.computed('sideMenu.isOpen', function() {
      return this.get('sideMenu.isOpen') ? 'true' : 'false';
    }),
    type: 'button',
    ariaControls: 'navigation',
    isActive: Ember.computed.alias('sideMenu.isOpen')
});
