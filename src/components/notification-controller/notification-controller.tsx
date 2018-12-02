import { Component, Method, Element, Prop } from '@stencil/core';
import { NotificationOptions } from '../../interfaces';
import { AnimationIn, AnimationOut } from '../../types';

@Component({
    tag: 'notification-controller',
    styleUrl: 'notification-controller.css',
    shadow: true
})
export class NotificationController {

    @Prop({ context: 'document' }) doc!: Document;

    @Prop() animationIn: AnimationIn = 'slideInRight';

    @Prop() animationOut: AnimationOut = 'slideOutTop';

    @Element() controllerEl: HTMLElement;

    @Method()
    success(opts: NotificationOptions | string) {
        opts = this.setDefaults(opts);
        opts.type = 'success';
        this.createNotification(opts);
    }

    @Method()
    error(opts: NotificationOptions | string) {
        opts = this.setDefaults(opts);
        opts.type = 'error';
        this.createNotification(opts);
    }

    private createNotification(opts: NotificationOptions) {
        const notification = this.doc.createElement('app-notification');
        Object.assign(notification, opts);
        this.controllerEl.appendChild(notification);
    }

    private setDefaults(opts: NotificationOptions | string) {
        if (typeof opts === 'string') {
            opts = {
                message: opts,
                duration: 5000,
                animationIn: this.animationIn,
                animationOut: this.animationOut
            };
        }
        if (!opts.animationIn) {
            opts.animationIn = this.animationIn;;
        }
        if (!opts.animationOut) {
            opts.animationOut = this.animationOut;
        }
        return opts;
    }

    render() {
        return (
            <slot></slot>
        );
    }

}
