import { lazy } from "react";

export const Hero = lazy(() => import("./home/Hero"));
export const QuotesMarque = lazy(() => import("./home/QuotesMarque"));
export const Resources = lazy(() => import("./home/Resources"));
export const Events = lazy(() => import("./home/Events"));
export const Testimonials = lazy(() => import("./home/Testimonials"));
export const Newsletter = lazy(() => import("./home/Newsletter"));

export const ContactForm = lazy(() => import("./contact/ContactForm"));

export const Introduction = lazy(() => import("./about/Introduction"));
