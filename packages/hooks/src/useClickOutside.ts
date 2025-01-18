import { useEventListener } from "./useEventListener";

export const useClickOutside = (
  ref: any,
  handler: any,
  mouseEvent = "mousedown"
) => {
  useEventListener(mouseEvent, (event: any) => {
    const el = ref?.current;

    if (!el || el.contains(event.target)) {
      return;
    }

    handler(event);
  });
};
