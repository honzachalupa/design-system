import config from "../config";
import Layout from "./layout";

export const metadata = {
    title: config.appName,
    description: config.description,
    keywords: config.keywords,
};

export default function Index() {
    return <Layout> </Layout>;
}
