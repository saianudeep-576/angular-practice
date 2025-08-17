import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getNameAction } from 'src/app/store/action';
import {
  getNameSelector,
  StateInformationInterface,
} from 'src/app/store/selector';

@Component({
  selector: 'app-store-practice-component',
  templateUrl: './store-practice-component.component.html',
  styleUrls: ['./store-practice-component.component.scss'],
})
export class StorePracticeComponentComponent {
  constructor(
    public store: Store<StateInformationInterface> /**Here we need to use the entire state information containing interface as data type */
  ) {}
  inputName = '';
  inputAge = 0;

  dispatchName() {
    this.store.dispatch(getNameAction({ name: this.inputName })); //action for dispatching the name

    /**
     * Once above action is dispatched, then we will get the name that we gave as input to the getNameSelector in selector.ts file
     * We will be subscribing to the selector and using it as below
     */
    this.store.select(getNameSelector).subscribe((p) => {
      console.log('name from state-selector', p);
    });
  }
}
