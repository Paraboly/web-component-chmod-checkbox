import { Component, Prop, h, State } from "@stencil/core";
import { calculatePermission } from "../../utils/utils";

@Component({
  tag: "chmod-checkbox",
  styleUrl: "chmod-checkbox.scss",
  shadow: true
})
export class CHModCheckbox {
  @Prop() first: string = "READ";
  @Prop() middle: string = "WRITE";
  @Prop() last: string = "EXECUTE";
  @Prop() isReadChecked: boolean = false;
  @Prop() isWriteChecked: boolean = false;
  @Prop() isExecuteChecked: boolean = false;
  @State() permission: number = 0;

  render() {
    return (
      <div class="wrapper">
        <div class="column1 animated-checkbox">
          <form>
            <div class="flex-center-vertically">
              <input
                id="read"
                name="check"
                type="checkbox"
                value={this.permission}
                checked={this.isReadChecked}
                onChange={() => {
                  this.isReadChecked = !this.isReadChecked;
                  this.permission = calculatePermission(
                    "read",
                    this.isReadChecked,
                    this.permission
                  );
                }}
              />
              <label htmlFor="read">
                <span></span>
              </label>
              <span class="content-text-style">{this.first}</span>
            </div>
          </form>
        </div>
        <div class="column2 animated-checkbox">
          <form>
            <div class="flex-center-vertically">
              <input
                id="write"
                name="check"
                type="checkbox"
                value={this.permission}
                checked={this.isWriteChecked}
                onChange={() => {
                  this.isWriteChecked = !this.isWriteChecked;
                  this.permission = calculatePermission(
                    "write",
                    this.isWriteChecked,
                    this.permission
                  );
                }}
              />
              <label htmlFor="write">
                <span></span>
              </label>
              <span class="content-text-style">{this.middle}</span>
            </div>
          </form>
        </div>
        <div class="column3 animated-checkbox">
          <form>
            <div class="flex-center-vertically">
              <input
                id="execute"
                name="check"
                type="checkbox"
                value={this.permission}
                checked={this.isExecuteChecked}
                onChange={() => {
                  this.isExecuteChecked = !this.isExecuteChecked;
                  this.permission = calculatePermission(
                    "execute",
                    this.isExecuteChecked,
                    this.permission
                  );
                }}
              />
              <label htmlFor="execute">
                <span></span>
              </label>
              <span class="content-text-style">{this.last}</span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
