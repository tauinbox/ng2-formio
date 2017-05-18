import {Component} from '@angular/core';
import {FORM} from './data';
@Component({
    selector: 'render-out',
    template: require('./render-out.html')
})
export class RenderOutComponent {
    private formdata: any = FORM;
    private options: any = {
        hooks: {
            beforeSubmit: (submission: Object, cb: any) => {
                console.log('Before Submit');
                console.log(submission);
                setTimeout(() => cb(null, submission), 1000);
            }
        }
    };

    onRender() {
        console.log('onRender');
    }

    onSubmit(value: any) {
        console.log('onSubmit');
        console.log(value);
    }

    onChange(value: any) {
        console.log('onChange');
        console.log(value);
    }
}
