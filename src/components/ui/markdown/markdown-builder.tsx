import { IMarkdownProps } from "@/types/blogs";
import React from "react";
import Markdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

export const MarkdownBuilder: React.FC<IMarkdownProps> = ({markdownBody}) => {
    return (
        <Markdown
            className="prose lg:prose-xl text-fore dark:text-fore-dark w-full"
            remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
            rehypePlugins={[rehypeSanitize]}
            components={{
                h1(props) {
                    const { node, ...rest } = props;
                    return (
                        <h2
                            className="text-adaptive text-3xl font-bold mb-4 break-words"
                            {...rest}
                        />
                    );
                },
                h2(props) {
                    const { node, ...rest } = props;
                    return (
                        <h3
                            className="text-adaptive text-2xl font-bold break-words"
                            {...rest}
                        />
                    );
                },
                h3(props) {
                    const { node, ...rest } = props;
                    return (
                        <h4
                            className="text-adaptive text-xl font-bold break-words"
                            {...rest}
                        />
                    );
                },
                h4(props) {
                    const { node, ...rest } = props;
                    return (
                        <h5
                            className="text-adaptive text-lg font-bold break-words"
                            {...rest}
                        />
                    );
                },
                h5(props) {
                    const { node, ...rest } = props;
                    return (
                        <h6
                            className="text-adaptive text-base font-bold break-words"
                            {...rest}
                        />
                    );
                },
                h6(props) {
                    const { node, ...rest } = props;
                    return (
                        <h6
                            className="text-adaptive text-sm font-bold break-words"
                            {...rest}
                        />
                    );
                },

                strong(props) {
                    const { node, ...rest } = props;
                    return <strong className="text-adaptive break-words" {...rest} />;
                },
                a(props) {
                    const { node, ...rest } = props;
                    return <a className="text-link break-words" {...rest} />;
                },
                img(props) {
                    const { node, ...rest } = props;
                    return <img className="rounded-lg" {...rest} />;
                },
                p(props) {
                    const { node, ...rest } = props;
                    return (
                        <p
                            className="text-adaptive break-words"
                            {...rest}
                        />
                    );
                },
                
                code(props) {
                    const { node, ...rest } = props;
                    return (
                        <code
                            className="text-adaptive break-words"
                            {...rest}
                        />
                    );
                },
            }}
        >
            {markdownBody}
        </Markdown>
    );
};