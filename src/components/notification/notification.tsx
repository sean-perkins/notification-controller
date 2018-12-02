import { Component, Prop, Element, Event, EventEmitter, Listen } from '@stencil/core';
import { NotificationType, AnimationIn, AnimationOut } from '../../types';

@Component({
    tag: 'app-notification',
    styleUrl: 'notification.css',
    shadow: true
})
export class AppNotification {

    @Element() notificationEl: HTMLElement;

    @Prop() message: string;

    @Prop() duration: number;

    @Prop() type: NotificationType;

    @Prop() animationIn: AnimationIn;

    @Prop() animationOut: AnimationOut;

    @Prop() successIcon = 'checkmark-circle';

    @Prop() errorIcon = 'close-circle';

    @Prop({ mutable: true}) dismissOnClick = true;

    @Event() notificationCompleted: EventEmitter;

    private durationTimeout: any;

    componentDidLoad() {
        this.notificationEl.classList.add(this.animationIn);
        this.durationTimeout = setTimeout(() => {
            this.notificationEl.classList.add(this.animationOut);
        }, this.duration);
        this.waitForAnimationOut();
    }

    @Listen('click')
    dismiss() {
        if (this.dismissOnClick) {
            if (this.durationTimeout) {
                clearTimeout(this.durationTimeout);
            }
            this.notificationEl.classList.add(this.animationOut);
        }
    }

    getIcon() {
        let iconName = '';
        switch (this.type) {
            case 'success':
                iconName = this.successIcon;
                break;
            case 'error':
                iconName = this.errorIcon;
                break;
        }
        return (
            <ion-icon class={this.type} name={iconName}></ion-icon>
        );
    }

    private waitForAnimationOut() {
        this.notificationEl.addEventListener('animationend', (event: AnimationEvent) => {
            if (event.animationName === this.animationOut) {
                this.removeNotification();
            }
        });
    }

    private removeNotification() {
        this.notificationCompleted.emit();
        this.notificationEl.remove();
    }

    render() {
        return [
            this.getIcon(),
            <p innerHTML={this.message}></p>
        ]
    }

}
