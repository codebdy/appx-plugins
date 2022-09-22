import { IBehavior } from "@rxdrag/appx-plugin-sdk";
import { locales } from "../../locales";
import { schema } from "./schema";

export const behaviors: IBehavior[] = [
  {
    name: 'Example1',
    extends: ['Field'],
    selector: (node) => node.props?.['x-component'] === 'Example1',
    designerProps: {
      droppable: true,
    },
    designerLocales: locales,
    schema,
  }
]