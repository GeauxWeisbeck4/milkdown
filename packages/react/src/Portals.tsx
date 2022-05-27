/* Copyright 2021, Milkdown by Mirone. */
import type { Ctx } from '@milkdown/core';
import { ViewFactory } from '@milkdown/prose';
import { createContext, memo, ReactNode } from 'react';

export const portalContext = createContext<(Component: React.FC<{ children: ReactNode }>) => (ctx: Ctx) => ViewFactory>(
    () => () => {
        throw new Error();
    },
);

const getId = (portals: React.ReactPortal[]) => portals.map((x) => x.key).join(',');
export const Portals: React.FC<{ portals: React.ReactPortal[] }> = memo(
    ({ portals }) => {
        return <>{portals}</>;
    },
    (prev, next) => {
        return getId(prev.portals) === getId(next.portals);
    },
);
