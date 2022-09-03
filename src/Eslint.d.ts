export namespace Eslint {
    type ParserOptions = {
        ecmaVersion: 6;
        sourceType: "module";
        ecmaFeatures: {
            jsx: Boolean;
        };
    };
    type Plugins = Array<string>;
    type Rules = RulesStylisticIssues<RulesValue> &
        RuleECMAScript6<RulesValue> &
        RuleNodeAndCommon<RulesValue> &
        RuleVariables<RulesValue> &
        RuleStrictMode<RulesValue> &
        RulePossibleErrors<RulesValue>;
    /**这些规则只与 ES6 有关, 即通常所说的 ES2015：*/
    type RuleECMAScript6<T> = {   // TODO:ES6 
    };
    /**这些规则是关于风格指南的，而且是非常主观的*/
    type RulesStylisticIssues<T> = { // TODO:ES6 
        /** 在数组开括号后和闭括号前强制换行 */
        "array-bracket-newline": T;
        /** 强制数组方括号中使用一致的空格 */
        "array-bracket-spacing": T;
    };
    /**Node.js 或 CommonJS的*/
    type RuleNodeAndCommon<T> = {// TODO:ES6 

    };
    /**变量声明*/
    type RuleVariables<T> = {// TODO:ES6 

    };
    /**严格模式有关*/
    type RuleStrictMode<T> = { // TODO:ES6 
        /**要求或禁止使用严格模式指令*/
        strict: T;
    };
    /**这些规则与 JavaScript 代码中可能的错误或逻辑错误有关：*/
    type RulePossibleErrors<T> = { // TODO:ES6 

    };
    /**这些规则是关于最佳实践的，帮助你避免一些问题*/
    type RuleBest = {           // TODO:ES6 

    }
        ;
    /**规则的值*/
    type RulesValue =
        | "off"
        | "warn"
        | "error"
        | Record<string, string | Array<any>>;
    /**预置环境*/
    type Env = {
        /** 浏览器环境*/
        browser: Boolean;
        node: Boolean;
        commonjs: Boolean;
        "shared-node-browser": Boolean;
        es6: Boolean;
        worker: Boolean;
        amd: Boolean;
        mocha: Boolean;
        jasmine: Boolean;
        jest: Boolean;
        phantomjs: Boolean;
        protractor: Boolean;
        qunit: Boolean;
        jquery: Boolean;
        prototypejs: Boolean;
        shelljs: Boolean;
        meteor: Boolean;
        mongo: Boolean;
        applescript: Boolean;
        nashorn: Boolean;
        serviceworker: Boolean;
        atomtest: Boolean;
        embertest: Boolean;
        webextensions: Boolean;
        greasemonkey: Boolean;
    };
}

/**Eslint 配置文件 @see https://cn.eslint.org/ */
interface ESlintConfig  {
    /** 一个环境定义了一组预定义的全局变量
     * @see https://cn.eslint.org/docs/user-guide/configuring#specifying-environments
     * */
    env: Eslint.Env;

    /** 规则
     * @see https://cn.eslint.org/docs/rules/
     * */
    rules: Eslint.Rules;

    /** 插件 */
    plugins: Eslint.Plugins;

    /** ESLint 允许你指定你想要支持的 JavaScript 语言选项 */
    parserOptions: Eslint.ParserOptions;
}
export default ESlintConfig