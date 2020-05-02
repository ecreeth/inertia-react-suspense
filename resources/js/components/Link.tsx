// @ts-nocheck
import { Inertia, shouldIntercept } from '@inertiajs/inertia';
import { createElement, useCallback } from 'react';

const noop = () => undefined;

export default function Link({
  children,
  data = {},
  href,
  method = 'get',
  onClick = noop,
  preserveScroll = false,
  preserveState = false,
  replace = false,
  ...props
}) {
  const visit = useCallback(
    event => {
      onClick(event);

      if (shouldIntercept(event)) {
        event.preventDefault();

        Inertia.visit(href, {
          data,
          method,
          preserveScroll,
          preserveState,
          replace
        });
      }
    },
    [data, href, method, onClick, preserveScroll, preserveState, replace]
  );

  return createElement('a', { ...props, href, onClick: visit }, children);
}
