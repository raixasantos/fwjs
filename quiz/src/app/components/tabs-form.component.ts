import { Component } from "@angular/core";

@Component({
  selector: "app-tabs-form",
  template: ` <div class="container-form">
    <h2>Tabs</h2>
    <form>
      <div class="section-input">
        <h5>Núm. de tabs</h5>
        <input type="text" cleave="{numericOnly: true}">
      </div>
      <div class="section-input">
        <h5>Título</h5>
        <input type="text" />
      </div>
      <div class="section-input">
        <h5>Conteúdo</h5>
        <textarea></textarea>
      </div>
      <div class="section-buttons">
        <div class="buttons">
          <input type="submit" value="Salvar" />
        </div>
      </div>
    </form>
  </div>`,
  styles: [
    `
    .container-form {
        display: flex;
        flex-direction: column;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
        min-width: 400px;
    }
    .section-input {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    .section-buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    `
  ]
})
export class TabsFormComponent {}
