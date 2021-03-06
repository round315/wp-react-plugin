/* istanbul ignore file: we do not need to care about the entry point file as errors are detected through integration tests (E2E) */

/**
 * The entry point for the admin side wp-admin resource.
 */
import "antd/dist/antd.css";
import "./style/admin.scss";
import "@tatum/utils"; // Import once for startup polyfilling (e. g. setimmediate)
import { render } from "react-dom";
import { RootStore } from "./store";
import { Layout } from "./components";

const node = document.getElementById(`${RootStore.get.optionStore.slug}-component`);
const wpContent = node?.parentNode?.parentNode?.parentNode as HTMLElement;
if (wpContent) {
    wpContent.style.paddingLeft = "0";
}

if (node) {
    render(
        <RootStore.StoreProvider>
            <Layout />
        </RootStore.StoreProvider>,
        node
    );
}

// Expose this functionalities to add-ons, but you need to activate the library functionality
// in your webpack configuration, see also https://webpack.js.org/guides/author-libraries/
export * from "@tatum/utils";
export * from "./store";
