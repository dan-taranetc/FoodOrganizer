import * as React from "react";
import { IAppearanceOptions } from './types';
interface IBottomTabNavigatorProps {
    initialRouteName?: string;
    backBehavior?: "history" | "initialRoute" | "order" | "none" | undefined;
    children: React.ReactNode;
    screenOptions?: any;
    tabBarOptions?: any;
    appearance: Partial<IAppearanceOptions>;
}
declare const _default: <ParamList extends Record<string, object | undefined>>() => import("@react-navigation/native").TypedNavigator<ParamList, Readonly<{
    key: string;
    index: number;
    routeNames: string[];
    history?: unknown[] | undefined;
    routes: (Readonly<{
        key: string;
        name: string;
    }> & Readonly<{
        params?: object | undefined;
    }> & {
        state?: Readonly<any> | import("@react-navigation/native").PartialState<Readonly<any>> | undefined;
    })[];
    type: string;
    stale: false;
}>, {}, Record<string, {
    data?: any;
    canPreventDefault?: boolean | undefined;
}>, {
    ({ initialRouteName, backBehavior, children, screenOptions, tabBarOptions, appearance, ...rest }: IBottomTabNavigatorProps): JSX.Element;
    defaultProps: {
        lazy: boolean;
    };
}>;
export default _default;
