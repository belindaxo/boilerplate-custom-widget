(function () {
    /**
     * Template for the Styling Panel (APS) of the custom widget.
     */
    let template = document.createElement('template');
    template.innerHTML = `
        <form id="form">
        <tr>
            <button id="resetDefaults" type="button" style="margin-top: 10px; margin-bottom: 10px;">Reset to Default</button>
        </tr>
        <input type="submit" style="display: none;" />
        </form>

    `;

    /**
     * Custom Web Component for the Styling Panel (APS) of the custom widget.
     * @extends HTMLElement
     */
    class BoilerplateAps extends HTMLElement {
        /**
         * Initializes the shadow DOM and sets up event listeners for form inputs.
         */
        constructor() {
            super();

            const DEFAULTS = {
                // Define default values for the styling panel elements here
            }

            this._shadowRoot = this.attachShadow({ mode: 'open' });
            this._shadowRoot.appendChild(template.content.cloneNode(true));

            this._shadowRoot.getElementById('form').addEventListener('submit', this._submit.bind(this));
            // Add event listeners for each element in the same manner as above but with 'change' event instead of 'submit'

            // Reset button logic
            this._shadowRoot.getElementById('resetDefaults').addEventListener('click', () => {
                for (const key in DEFAULTS) {
                    if (key === 'chartTitle' || key === 'chartSubtitle') {
                        continue; // Skip these fields
                    }

                    const element = this._shadowRoot.getElementById(key);
                    if (!element) continue; // Skip if element not found

                    if (typeof DEFAULTS[key] === 'boolean') {
                        element.checked = DEFAULTS[key];
                    } else {
                        element.value = DEFAULTS[key];
                    }
                }
                this._submit(new Event('submit')); // Trigger submit event to update properties
            });
        }

        /**
         * Handles the form submissions and dispatches a 'propertiesChanged' event.
         * @param {Event} e - The form submission event.
         */
        _submit(e) {
            e.preventDefault();
            this.dispatchEvent(new CustomEvent('propertiesChanged', {
                detail: {
                    properties: {
                        // ex. chartTitle: this.chartTitle,
                        // ... other properties
                    }
                }
            }));
        }

        // Getters and setters for each property

        // //  Example: chartTitle
        // get chartTitle() {
        //     return this._shadowRoot.getElementById('chartTitle').value;
        // }

        // set chartTitle(value) {
        //     this._shadowRoot.getElementById('chartTitle').value = value;
        // }

        // //Example: showLegend (for checkbox inputs)
        // get showLegend() {
        //     return this._shadowRoot.getElementById('showLegend').checked;
        // }

        // set showLegend(value) {
        //     this._shadowRoot.getElementById('showLegend').checked = value;
        // }
    }
    customElements.define('com-sap-sample-boilerplate-aps', BoilerplateAps);
})();