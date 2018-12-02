import { Component, Method, Element, Prop } from '@stencil/core';
import { NotificationOptions } from '../../interfaces';
import { AnimationIn, AnimationOut, NotificationType } from '../../types';

@Component({
    tag: 'notification-controller',
    styleUrl: 'notification-controller.css',
    shadow: true
})
export class NotificationController {

    @Prop({ context: 'document' }) doc!: Document;

    @Prop() animationIn: AnimationIn = 'slideInRight';

    @Prop() animationOut: AnimationOut = 'fadeOut';

    @Element() controllerEl: HTMLElement;

    @Method()
    success(opts: NotificationOptions | string) {
        this.createNotification(opts, 'success');
    }

    @Method()
    error(opts: NotificationOptions | string) {
        this.createNotification(opts, 'error');
    }

    @Method()
    info(opts: NotificationOptions | string) {
        this.createNotification(opts, 'info');
    }

    @Method()
    warning(opts: NotificationOptions | string) {
        this.createNotification(opts, 'warning');
    }

    private createNotification(opts: NotificationOptions | string, type: NotificationType = 'success') {
        opts = this.setDefaults(opts);
        opts.type = type;
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
