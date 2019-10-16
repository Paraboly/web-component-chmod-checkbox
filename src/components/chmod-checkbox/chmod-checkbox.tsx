import { Component, Prop, h } from "@stencil/core";
import { isChecked, calculatePermission } from "../../utils/utils";
import { READ, WRITE, EXECUTE, EVENT_LISTENER } from "../../utils/constants";
import "@paraboly/pwc-animated-checkbox";

@Component({
  tag: "chmod-checkbox",
  styleUrl: "chmod-checkbox.scss",
  shadow: true
})
export class CHModCheckbox {
  /**
   * The first button text
   */
  @Prop() first: string = "READ";

  /**
   * The middle button text
   */
  @Prop() middle: string = "WRITE";

  /**
   * The last button text
   */
  @Prop() last: string = "EXECUTE";

  /**
   * Main mutable permission value depends on the selection of checkboxes
   */
  @Prop({ mutable: true, reflect: true }) permission: number = 0;

  /**
   * Read, Write & Execute Checkbox Input Elements
   */
  readCI: HTMLPwcAnimatedCheckboxElement;
  writeCI: HTMLPwcAnimatedCheckboxElement;
  executeCI: HTMLPwcAnimatedCheckboxElement;

  componentDidLoad() {
    this.subscribeListeners();
  }

  subscribeListeners = () => {
    this.readCI.addEventListener(EVENT_LISTENER, (event: any) => {
      const { checked } = event.detail;
      this.permission = calculatePermission(READ, checked, this.permission);
    });

    this.writeCI.addEventListener(EVENT_LISTENER, (event: any) => {
      const { checked } = event.detail;
      this.permission = calculatePermission(WRITE, checked, this.permission);
    });

    this.executeCI.addEventListener(EVENT_LISTENER, (event: any) => {
      const { checked } = event.detail;
      this.permission = calculatePermission(EXECUTE, checked, this.permission);
    });
  };

  render() {
    return (
      <div class="wrapper">
        <div class="column1">
          <pwc-animated-checkbox
            checkboxText={this.first}
            isChecked={isChecked(this.permission, READ)}
            ref={el => (this.readCI = el as HTMLPwcAnimatedCheckboxElement)}
          />
        </div>
        <div class="column2">
          <pwc-animated-checkbox
            checkboxText={this.middle}
            isChecked={isChecked(this.permission, WRITE)}
            ref={el => (this.writeCI = el as HTMLPwcAnimatedCheckboxElement)}
          />
        </div>
        <div class="column3">
          <pwc-animated-checkbox
            checkboxText={this.last}
            isChecked={isChecked(this.permission, EXECUTE)}
            ref={el => (this.executeCI = el as HTMLPwcAnimatedCheckboxElement)}
          />
        </div>
      </div>
    );
  }
}
