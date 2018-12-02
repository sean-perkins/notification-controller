import { NotificationType, AnimationIn } from '../types';

/**
 * The configurable options to control the display and behavior
 * of the displayed notification alert.
 */
export interface NotificationOptions {
    /**
     * The message to display
     */
    message: string;
    /**
     * The type of notification (success/error)
     */
    type?: NotificationType;
    /**
     * The duration in milliseconds to display.
     */
    duration?: number;

    animationIn?: AnimationIn;

    animationOut?: any;
}
