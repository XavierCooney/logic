// @ts-check
'ust strict';

console.log("Open source at https://github.com/XavierCooney/logic/");

function assert(condition: any, msg?: string): asserts condition {
    if (!condition) {
        throw new Error(msg)
    }
}

const COMMON_VAR_NAMES = [
    'p', 'q', 'r', 's', 'a', 'b', 'x', 'y'
];
let example_has_been_loaded = false;

const EXAMPLES = [
    { "t": "frege", "v": ["a", "b"], "a": ["a"], "c": "b → a", "name": "Proposition 1" },
    { "t": "frege", "v": ["a", "b", "c"], "a": ["c → (b → a)"], "c": "(c → b) → (c → a)", "name": "Proposition 2" },
    { "t": "frege", "v": ["a", "b", "c"], "a": ["b → a"], "c": "(c → (b → a)) → ((c → b) → (c → a))", "name": "Proposition 3" },
    { "t": "frege", "v": ["a", "b", "c"], "a": ["(b → a) → (c → (b → a))"], "c": "(b → a) → ((c → b) → (c → a))", "name": "Proposition 4" },
    { "t": "frege", "v": ["a", "b", "c"], "a": ["b → a"], "c": "((c → b) → (c → a))", "name": "Proposition 5" },
    { "t": "frege", "v": ["a", "b", "c", "d"], "a": ["c → (b → a)"], "c": "c → ((d → b) → (d → a))", "name": "Proposition 6" },
    { "t": "frege", "v": ["a", "b", "c", "d"], "a": ["b → a"], "c": "(d → (c → b)) → (d → (c → a))", "name": "Proposition 7" },
    { "t": "frege", "v": ["a", "b", "c", "d"], "a": ["d → (b → a)"], "c": "b → (d → a)", "name": "Proposition 8" },
    { "t": "frege", "v": ["a", "b", "c", "d"], "a": ["c → b"], "c": "(b → a) → (c → a)", "name": "Proposition 9" },
    { "t": "frege", "v": ["a", "b", "c", "d", "e"], "a": ["(e → (d → b)) → a"], "c": "(d → (e → b)) → a", "name": "Proposition 10" },
    { "t": "example", "v": ["p", "q"], "a": ["p → q", "p"], "c": "q", "name": "Modus ponens" },
    { "t": "example", "v": ["p", "q"], "a": ["p → q", "¬q"], "c": "¬p", "name": "Modus tollens" },
    { "t": "example", "v": ["p", "q"], "a": ["p → q", "q → p"], "c": "p ↔ q", "name": "Biconditional introduction" },
    { "t": "example", "v": ["p", "q"], "a": ["¬(p ∧ q)", "p"], "c": "¬q", "name": "Modus ponendo tollens" },
    { "t": "example", "v": ["p", "q", "r"], "a": ["((p → q) ∧ (q → r))"], "c": "(p → r)", "name": "Hypothetical Syllogism" },
    { "t": "example", "v": ["p", "q"], "a": ["((p ∨ q) ∧ ¬p)"], "c": "q", "name": "Disjunctive Syllogism" },
    { "t": "example", "v": ["p", "q", "r", "s"], "a": ["(p → q) ∧ (r → s)", "p ∨ r"], "c": "q ∨ s", "name": "Constructive Dilemma" },
    { "t": "example", "v": ["p", "q", "r", "s"], "a": ["(p → q) ∧ (r → s)", "¬q ∨ ¬s"], "c": "¬p ∨ ¬r", "name": "Destructive Dilemma" },
    { "t": "example", "v": ["p", "q", "r"], "a": ["(p → q) ∧ (p → r)"], "c": "p → (q ∧ r)", "name": "Composition" },
    { "t": "example", "v": ["p", "q"], "a": [], "c": "(¬(p ∧ q) ↔ (¬p ∨ ¬q)) ∧ (¬(p ∨ q) ↔ (¬p ∧ ¬q))", "name": "De Morgan's Laws" },
    { "t": "example", "v": ["p", "q", "r"], "a": [], "c": "((p ∧ q) → r) ↔ (p → (q → r))", "name": "Importation & Exportation" },
    { "t": "example", "v": ["p"], "a": [], "c": "p ∨ ¬p", "name": "Tertium non datur" },
    { "t": "example", "v": ["p", "q"], "a": ["p → (q ∧ ¬q)"], "c": "¬p", "name": "Proof by Contradiction" },
    { "t": "example", "v": ["p", "q"], "a": ["p ∧ ¬p"], "c": "q", "name": "Principle of Explosion" },
    { "t": "example", "v": ["p", "q", "r"], "a": [], "c": "(p → (q → p)) ∧ ((p → (q → r) → ((p → q) → (p → r))) ∧ ((¬p → ¬q) → (q → p)))", "name": "Jan Łukasiewicz's Axioms" },
    { "t": "fallacy", "v": ["p", "q"], "a": ["p → q", "¬p"], "c": "¬q", "name": "Fallacy: Denying the antecedent" },
    { "t": "fallacy", "v": ["p", "q"], "a": ["p → q", "q"], "c": "p", "name": "Fallacy: Affirming the consequent" },
    { "t": "fallacy", "v": ["p", "q"], "a": ["p ∨ q", "q"], "c": "¬p", "name": "Fallacy: Affirming a disjunct" },
];

const FREGE_EXAMPLES = [
    { "v": ["p", "q"], "a": ["p → q", "p"], "c": "q", "name": "Modus ponens" },
    { "v": ["p", "q"], "a": ["p → q", "¬q"], "c": "¬p", "name": "Modus tollens" },
    { "v": ["p", "q"], "a": ["p → q", "q → p"], "c": "p ↔ q", "name": "Biconditional introduction" },
    { "v": ["p", "q"], "a": ["¬(p ∧ q)", "p"], "c": "¬q", "name": "Modus ponendo tollens" },
    { "v": ["p", "q", "r"], "a": ["((p → q) ∧ (q → r))"], "c": "(p → r)", "name": "Hypothetical Syllogism" },
    { "v": ["p", "q"], "a": ["((p ∨ q) ∧ ¬p)"], "c": "q", "name": "Disjunctive Syllogism" },
    { "v": ["p", "q", "r", "s"], "a": ["(p → q) ∧ (r → s)", "p ∨ r"], "c": "q ∨ s", "name": "Constructive Dilemma" },
    { "v": ["p", "q", "r", "s"], "a": ["(p → q) ∧ (r → s)", "¬q ∨ ¬s"], "c": "¬p ∨ ¬r", "name": "Destructive Dilemma" },
    { "v": ["p", "q", "r"], "a": ["(p → q) ∧ (p → r)"], "c": "p → (q ∧ r)", "name": "Composition" },
    { "v": ["p", "q"], "a": [], "c": "(¬(p ∧ q) ↔ (¬p ∨ ¬q)) ∧ (¬(p ∨ q) ↔ (¬p ∧ ¬q))", "name": "De Morgan's Laws" },
    { "v": ["p", "q", "r"], "a": [], "c": "((p ∧ q) → r) ↔ (p → (q → r))", "name": "Importation & Exportation" },
    { "v": ["p"], "a": [], "c": "p ∨ ¬p", "name": "Tertium non datur" },
    { "v": ["p", "q"], "a": ["p → (q ∧ ¬q)"], "c": "¬p", "name": "Proof by Contradiction" },
    { "v": ["p", "q", "r"], "a": [], "c": "(p → (q → p)) ∧ ((p → (q → r) → ((p → q) → (p → r))) ∧ ((¬p → ¬q) → (q → p)))", "name": "Jan Łukasiewicz's Axioms" },
    { "v": ["p", "q"], "a": ["p → q", "¬p"], "c": "¬q", "name": "Fallacy: Denying the antecedent" },
    { "v": ["p", "q"], "a": ["p → q", "q"], "c": "p", "name": "Fallacy: Affirming the consequent" },
    { "v": ["p", "q"], "a": ["p ∨ q", "q"], "c": "¬p", "name": "Fallacy: Affirming a disjunct" },
    { "v": ["p", "q"], "a": ["p ∧ ¬p"], "c": "q", "name": "Principle of Explosion" }
];


console.log(`${EXAMPLES.length} examples laoded`);

let variables_selected: string[] = [];

abstract class Expression {
    abstract evaluate(assignments: { [pronumeral: string]: boolean}): boolean;
}

class SymbolExpression extends Expression {
    symbol: string;

    constructor(symbol: string) {
        super();
        this.symbol = symbol;
    }

    evaluate(assignments: { [pronumeral: string]: boolean}): boolean {
        return assignments[this.symbol];
    }
}

class NotExpression extends Expression {
    e: Expression;

    constructor(e: Expression) {
        super();
        this.e = e;
    }

    evaluate(assignments: { [pronumeral: string]: boolean}): boolean {
        return !(this.e.evaluate(assignments));
    }
}

class AndExpression extends Expression {
    a: Expression;
    b: Expression;

    constructor(a: Expression, b: Expression) {
        super();
        this.a = a;
        this.b = b;
    }

    evaluate(assignments: { [pronumeral: string]: boolean}): boolean {
        return (this.a.evaluate(assignments)) && (this.b.evaluate(assignments));
    }
}

class OrExpression extends Expression {
    a: Expression;
    b: Expression;

    constructor(a: Expression, b: Expression) {
        super();
        this.a = a;
        this.b = b;
    }

    evaluate(assignments: { [pronumeral: string]: boolean}): boolean {
        return (this.a.evaluate(assignments)) || (this.b.evaluate(assignments));
    }
}

class IffExpression extends Expression {
    a: Expression;
    b: Expression;

    constructor(a: Expression, b: Expression) {
        super();
        this.a = a;
        this.b = b;
    }

    evaluate(assignments: { [pronumeral: string]: boolean}): boolean {
        let a = this.a.evaluate(assignments);
        let b = this.b.evaluate(assignments);
        return a == b;
    }
}

class ImpliesExpression extends Expression {
    a: Expression;
    b: Expression;

    constructor(a: Expression, b: Expression) {
        super();
        this.a = a;
        this.b = b;
    }

    evaluate(assignments: { [pronumeral: string]: boolean}): boolean {
        let a = this.a.evaluate(assignments);
        let b = this.b.evaluate(assignments);
        if(a) {
            return b;
        } else {
            return true;
        }
    }
}

class ConstantExpression extends Expression {
    value: boolean;

    constructor(v: boolean) {
        super();
        this.value = v;
    }

    evaluate(assignments: { [pronumeral: string]: boolean}): boolean {
        return this.value;
    }
}

class ParseResult {
    expr?: Expression;
    msg?: string;

    constructor(expr?: Expression, msg?: string) {
        if(!expr && !msg) { throw new Error("Neither expression nor message defined"); }

        this.expr = expr;
        this.msg = msg;
    }
}

class Parser {
    s: string;

    constructor(s: string) {
        this.s = s;
    }

    consume_whitespace() {
        let whitespace_len = this.s.match(/^[ ]*/)?.[0].length;
        this.s = this.s.slice(whitespace_len);
    }

    parse(fixity: number): ParseResult {
        this.consume_whitespace();

        if(fixity <= 0) {
            // debugger;
            let pronumeral_match = this.s.match(/^[a-zA-Z_]+/);
            if(pronumeral_match != null && !(['T', 'F'].includes(pronumeral_match[0]))) {
                this.s = this.s.slice(pronumeral_match[0].length);
                if(variables_selected.includes(pronumeral_match[0])) {
                    return new ParseResult(
                        new SymbolExpression(pronumeral_match[0]),
                        undefined
                    );
                } else {
                    return new ParseResult(
                        undefined,
                        `Unrecognised variable "${pronumeral_match[0]}"`
                    );
                }
            } else if(this.s.length > 0 && this.s[0] == "(") {
                this.s = this.s.slice(1);
                this.consume_whitespace();
                let e = this.parse(10);
                if(e.msg) {
                    return e;
                }
                this.consume_whitespace();
                if(this.s.length < 1 || this.s[0] != ")") {
                    return new ParseResult(undefined, "Expected close bracket");
                }
                this.s = this.s.slice(1);
                this.consume_whitespace();
                return e;
            } else if(this.s.length > 0 && ['⊤', 'T'].includes(this.s[0])) {
                this.s = this.s.slice(1);
                this.consume_whitespace();

                return new ParseResult(
                    new ConstantExpression(true),
                    undefined
                );
            } else if(this.s.length > 0 && ['⊥', 'F'].includes(this.s[0])) {
                this.s = this.s.slice(1);
                this.consume_whitespace();

                return new ParseResult(
                    new ConstantExpression(false),
                    undefined
                );
            } else {
                if(this.s.length > 0) {
                    return new ParseResult(
                        undefined,
                        `Incorrect formulation (around character "${this.s[0]}")`
                    );
                } else {
                    return new ParseResult(
                        undefined,
                        `Incorrect formulation (around the end of input)`
                    );
                }
            }
        } else if(fixity == 1) {
            let num_nots = 0;
            this.consume_whitespace();
            while(this.s.length > 0 && ["~", "!", "¬"].includes(this.s[0])) {
                this.s = this.s.slice(1);
                this.consume_whitespace();
                num_nots += 1;
            }
            let e = this.parse(fixity - 1);
            if(e.msg) {
                return e;
            }
            while(num_nots > 0) {
                assert(e.expr);
                e = new ParseResult(new NotExpression(e.expr), e.msg);
                num_nots -= 1;
            }
            return e;
        } else if(fixity == 3) {
            let e = this.parse(fixity - 1);
            if(e.msg) { return e; }
            this.consume_whitespace();
            while(this.s.length > 0 && ['∧', '&', '.'].includes(this.s[0])) {
                this.s = this.s.slice(1);
                this.consume_whitespace();
                let new_expr = this.parse(fixity - 1);
                if(new_expr.msg) { return new_expr; }
                this.consume_whitespace();

                assert(e.expr);
                assert(new_expr.expr);
                e = new ParseResult(
                    new AndExpression(e.expr, new_expr.expr),
                    e.msg
                );
            }
            return e;
        } else if(fixity == 4) {
            let e = this.parse(fixity - 1);
            if(e.msg) { return e; }
            this.consume_whitespace();
            while(this.s.length > 0 && ['∨', '+', '|'].includes(this.s[0])) {
                this.s = this.s.slice(1);
                this.consume_whitespace();
                let new_expr = this.parse(fixity - 1);
                if(new_expr.msg) { return new_expr; }
                this.consume_whitespace();

                assert(e.expr);
                assert(new_expr.expr);
                e = new ParseResult(
                    new OrExpression(e.expr, new_expr.expr),
                    e.msg
                );
            }
            return e;
        } else if(fixity == 5) {
            let e = this.parse(fixity - 1);
            if(e.msg) { return e; }
            this.consume_whitespace();
            while(this.s.length > 0 && ['→', '>'].includes(this.s[0])) {
                this.s = this.s.slice(1);
                this.consume_whitespace();
                let new_expr = this.parse(fixity - 1);
                if(new_expr.msg) { return new_expr; }
                this.consume_whitespace();

                assert(e.expr);
                assert(new_expr.expr);
                e = new ParseResult(
                    new ImpliesExpression(e.expr, new_expr.expr),
                    e.msg
                );
            }
            return e;
        } else if(fixity == 6) {
            let e = this.parse(fixity - 1);
            if(e.msg) { return e; }
            this.consume_whitespace();
            while(this.s.length > 0 && ['↔', '=', '≡', '⊨'].includes(this.s[0])) {
                this.s = this.s.slice(1);
                this.consume_whitespace();
                let new_expr = this.parse(fixity - 1);
                if(new_expr.msg) { return new_expr; }
                this.consume_whitespace();

                assert(e.expr);
                assert(new_expr.expr);
                e = new ParseResult(
                    new IffExpression(e.expr, new_expr.expr),
                    e.msg
                );
            }
            return e;
        } else {
            let e = this.parse(fixity - 1);
            this.consume_whitespace();
            return e;
        }
    }

    parse_fully() {
        let e = this.parse(10);
        if(!e.msg && this.s.length > 0) {
            return new ParseResult(
                undefined,
                `Failed to fully read input around "${this.s}"`
            )
        } else {
            return e;
        }
    }
}

function on_variable_list_change() {
    let input_box = <HTMLInputElement>document.getElementById('variable-logic-input');

    let split_input = input_box.value.split(/[ ,]+/).filter(Boolean);
    let arrays_match = split_input.length == variables_selected.length && split_input.every((v, i) => {
        return v === variables_selected[i];
    });
    if(!arrays_match) {
        variables_selected = split_input;
        render_selected_vars();
    }
}

function render_selected_vars() {
    let variable_select_buttons_el = <HTMLElement>document.getElementById("variable-select-btns");
    while(variable_select_buttons_el.firstChild) {
        variable_select_buttons_el.removeChild(variable_select_buttons_el.firstChild);
    }

    let variables_to_display_in_buttons = new Set(COMMON_VAR_NAMES.concat(variables_selected));

    for(let var_name of variables_to_display_in_buttons) {
        let button_el = document.createElement("button");

        let var_is_selected = variables_selected.includes(var_name);
        button_el.innerText = var_name + (var_is_selected ?  " ✔" : "");
        if(var_is_selected) {
            button_el.style.border = "3px red solid";
        }

        button_el.addEventListener('click', (e) => {
            if(variables_selected.includes(var_name)) {
                variables_selected = variables_selected.filter(v => v != var_name);
            } else {
                variables_selected.push(var_name);
            }
            render_selected_vars();
        });

        variable_select_buttons_el.appendChild(button_el);
    }
    
    let text_input_box = <HTMLInputElement>document.getElementById('variable-logic-input');
    text_input_box.value = variables_selected.join(', ');
    load_logic_symbol_buttons();

    schedule_recalc();
}

function load_logic_symbol_buttons() {
    let hints_enabled_input = <HTMLInputElement>document.getElementById('option-logic-symbols-hints');
    let synonyms_enabled_input = <HTMLInputElement>document.getElementById('option-logic-symbols-synonyms');

    let hints_enabled = hints_enabled_input.checked;
    let synonyms_enabled = synonyms_enabled_input.checked;

    let KEYBOARD_SYMBOLS = [
        [' → ', '→', 'implies'],
        ['¬', '¬', 'negation'],
        [' ∧ ', '∧', 'conjunction'],
        [' ∨ ', '∨', 'disjunction'],
        [' ↔ ', '↔', 'iff'],
        ['(', '(', ''],
        [')', ')', ''],
        ['⊤', '⊤', 'tautology'],
        ['⊥', '⊥', 'contradiction']
    ];
    let ADDITIONAL = [
        [' = ', '=', 'is equivalent to'],
        [' ≡ ', '≡', 'if and only if'],
        ['T', 'T', 'true'],
        ['F', 'F', 'false']
        // [' = ', '=', 'equals']
    ];
    if(synonyms_enabled) {
        KEYBOARD_SYMBOLS = KEYBOARD_SYMBOLS.concat(ADDITIONAL);
    }

    for(let selected_variable of variables_selected) {
        KEYBOARD_SYMBOLS.push([selected_variable, selected_variable, "variable"]);
    }

    for(let container of Array.prototype.slice.call(document.getElementsByClassName('virt-btn-keyboard virt-btn-logic-symbs'))) {
        while(container.firstChild) {
            container.removeChild(container.firstChild);
        }

        for(let symbol of KEYBOARD_SYMBOLS) {
            let button = document.createElement('button');
            button.innerText = symbol[1] + (hints_enabled && symbol[2] ? " (" + symbol[2] + ")" : "");
            button.addEventListener('click', () => {
                let container_parent = container.parentElement;
                let input_el = container_parent.getElementsByClassName('logic-input-line')[0].getElementsByClassName('logic-input')[0];
                let old_pos = input_el.selectionStart;
                input_el.value = input_el.value.slice(0, input_el.selectionStart) + symbol[0] + input_el.value.slice(input_el.selectionStart);
                input_el.focus();
                input_el.selectionStart = input_el.selectionEnd = old_pos + symbol[0].length;

                schedule_recalc();
            });
            container.appendChild(button);
        }
    }
}

function schedule_recalc() {
    if(example_has_been_loaded) {
        let msg_box = document.getElementById('example-loaded-msg-modified');
        if(msg_box) {
            msg_box.style.display = '';
        }
    }
    setTimeout(recalculate, 10);
}

function recalculate() {
    let conclusion_boxes: HTMLElement[] = Array.prototype.slice.call(document.getElementsByClassName('conclusions-input-box'));
    let assumption_boxes: HTMLElement[] = Array.prototype.slice.call(document.getElementsByClassName('premises-input-box'));

    let conclusion_expressions: {e: Expression, b: HTMLElement}[] = [];
    let assumption_expressions: {e: Expression, b: HTMLElement}[] = [];

    for(let conclusion_box of conclusion_boxes) {
        let err_box = <HTMLElement>conclusion_box.getElementsByClassName('logic-output-err')[0];
        let line = (<HTMLInputElement>conclusion_box.getElementsByClassName('logic-input')[0]).value;
        let parsed = new Parser(line).parse_fully();
        err_box.classList.remove("all-good");
        if(parsed.msg) {
            err_box.innerText = parsed.msg + "\n";
        } else {
            err_box.innerText = "";
            assert(parsed.expr);

            conclusion_expressions.push({
                e: parsed.expr,
                b: err_box
            });
        }
    }

    for(let assumption_box of assumption_boxes) {
        let err_box = <HTMLElement>assumption_box.getElementsByClassName('logic-output-err')[0];
        let line = (<HTMLInputElement>assumption_box.getElementsByClassName('logic-input')[0]).value;
        let parsed = new Parser(line).parse_fully();
        if(parsed.msg) {
            err_box.innerText = parsed.msg + "\n";
        } else {
            err_box.innerText = "";
            assert(parsed.expr);

            assumption_expressions.push({
                e: parsed.expr,
                b: err_box
            });
        }
    }

    function make_context(assignments: { [pronumeral: string]: boolean}) {
        let x = [];
        for(let var_name in assignments) {
            let val = assignments[var_name];
            if(val) {
                x.push(`${var_name}`);
            } else {
                x.push(`¬${var_name}`);
            }
        }
        if(x.length == 0) {
            return " for empty set";
        }
        return "for " + x.join(', ');
    }

    function check(assignments: { [pronumeral: string]: boolean}) {
        for(let expr of assumption_expressions) {
            if(!expr.e.evaluate(assignments)) {
                return;
            }
        }

        for(let expr of conclusion_expressions) {
            if(!expr.e.evaluate(assignments)) {
                expr.b.innerText += "Case failed " + make_context(assignments) + "\n";
            }
        }
    }

    function resolve(pronumerals: string[], assignments: { [pronumeral: string]: boolean}) {
        if(pronumerals.length == 0) {
            check(assignments);
        } else {
            let as_false = Object.assign({}, assignments);
            as_false[pronumerals[0]] = false;
            let as_true = Object.assign({}, assignments);
            as_true[pronumerals[0]] = true;
            resolve(pronumerals.slice(1), as_false);
            resolve(pronumerals.slice(1), as_true);
        }
    }

    resolve(variables_selected, {});

    for(let conclusion_expr of conclusion_expressions) {
        console.log(conclusion_expr.b.innerText);
        if(conclusion_expr.b.innerText == "") {
            conclusion_expr.b.classList.add("all-good");
            conclusion_expr.b.innerText = "✅ All cases correct";
        } else {
            conclusion_expr.b.innerText = "❌ " + conclusion_expr.b.innerText;
        }
    }
}

function load_logic_inputs() {
    load_logic_symbol_buttons();

    for(let logic_input_el of Array.prototype.slice.call(document.getElementsByClassName('logic-input'))) {
        let logic_input = logic_input_el;
        logic_input.spellcheck = false;
        logic_input.autocapitalize = 'off';
        logic_input.autocomplete = 'off';
    }

    for(let el of Array.prototype.slice.call(document.getElementsByClassName('logic-input'))) {
        el.addEventListener('input', schedule_recalc);
        el.addEventListener('change', schedule_recalc);
    }

    for(let el of <HTMLElement[]>Array.prototype.slice.call(document.getElementsByClassName('logic-remove-premise'))) {
        el.addEventListener('click', function() {
            this?.parentElement?.parentElement?.parentElement?.remove();
            schedule_recalc();
        });
    }
}

function load_data(variables: string[], assumptions: string[], conclusion: string) {
    variables_selected = variables.slice(0);

    (<HTMLInputElement>document.getElementById('logic-conclusion-input')).value = conclusion

    Array.from(document.getElementsByClassName('premises-input-box')).forEach((el) => {
        el.remove();
    });

    for(let assumption_line of assumptions) {
        make_new_premise(assumption_line);
    }

    render_selected_vars();
    schedule_recalc();

    let msg_box = document.getElementById('example-loaded-msg-modified');
    if(msg_box) {
        msg_box.style.display = 'none';
    }
}

function load_from_url() {
    let url = new URL(window.location.href);
    let encoded = url.searchParams.get("s");
    if(!encoded) return;

    let decoded_json = decodeURIComponent(escape(atob(decodeURIComponent(encoded))));
    console.log(`JSON: ${decoded_json}`);
    let decoded_object: {'v': string[], 'a': string[], 'c': string} = JSON.parse(decoded_json);

    load_data(decoded_object['v'], decoded_object['a'], decoded_object['c']);
}

function make_new_premise(contents: string) {
    let new_div = document.createElement('div');
    new_div.classList.add("big-box");
    new_div.classList.add("premises-input-box");

    new_div.innerHTML = `
    <div class="inner-input-box">
        <div class="logic-input-line">
            <h2>Premise</h2>
            <input class="logic-input">
            <button class="logic-remove-premise">Remove</button>
        </div>
        <div id="conclusions-select-btns" class="virt-btn-keyboard virt-btn-logic-symbs"></div>
    </div>
    <div class="logic-output-err"></div>`;
    (<HTMLInputElement>new_div.getElementsByClassName('logic-input')[0]).value = contents;

    document.getElementById('make-new-assumption')?.parentElement?.insertBefore(new_div, document.getElementById('make-new-assumption'));
    load_logic_inputs();
    schedule_recalc();
}

function convert_system_to_object() {
    let obj: {'v': string[], 'a': string[], 'c': string} = {'v': [], 'a': [], 'c': ""};
    obj.v = variables_selected;

    function get_logic_lines(name: string) {
        let outer_el = (Array.prototype.slice.call(document.getElementsByClassName(name)));
        return outer_el.map((el) => (el.getElementsByClassName('logic-input')[0]).value);
    }
    obj.a = get_logic_lines('premises-input-box');
    obj.c = get_logic_lines('conclusions-input-box')[0];

    return obj;
}

// Quick example generator function
declare interface Window {
    convert_system_to_object_str: any;
}
window.convert_system_to_object_str = function() {
    return JSON.stringify(convert_system_to_object());
}

window.addEventListener('load', () => {
    load_from_url();
    render_selected_vars();

    let variable_logic_input = document.getElementById('variable-logic-input');
    assert(variable_logic_input);
    variable_logic_input.addEventListener('change', on_variable_list_change);
    variable_logic_input.addEventListener('input', on_variable_list_change);

    load_logic_inputs();

    document.getElementById('option-logic-symbols-hints')?.addEventListener('click', load_logic_symbol_buttons);
    document.getElementById('option-logic-symbols-synonyms')?.addEventListener('click', load_logic_symbol_buttons);

    document.getElementById('make-new-assumption')?.addEventListener('click', function() {
        make_new_premise("");
    });

    document.getElementById('share-btn')?.addEventListener('click', () => {
        let encoded = btoa(unescape(encodeURIComponent(JSON.stringify(convert_system_to_object()))));
        let current_url_without_search = window.location.href.slice(
            0,
            window.location.href.length - window.location.search.length
        );
        prompt(
            "Please share/save this URL to return to your logic system:",
            `${current_url_without_search}?s=${window.encodeURIComponent(encoded)}`
        );
    });

    for(let example of EXAMPLES) {
        let option = document.createElement('option');
        option.innerText = example.name;
        document.getElementById(`example-${example.t}`)?.appendChild(option);
    }

    document.getElementById('load-example-btn')?.addEventListener('click', () => {
        let index = (<HTMLSelectElement>document.getElementById('example-select')).selectedIndex;
        (<HTMLElement>document.getElementById('example-loaded-msg')).innerText =
            `Example Loaded: ${EXAMPLES[index].name}`;
        example_has_been_loaded = true;
        load_data(EXAMPLES[index].v, EXAMPLES[index].a, EXAMPLES[index].c);
    });
});