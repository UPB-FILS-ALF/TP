import { CharStreams, CodePointCharStream, CommonTokenStream, Token } from 'antlr4ts';
import { AlfLexer } from './AlfLexer.js';
import { AlfParser, TypeFloatContext, TypeIntContext, TypeStringContext, ValueFloatContext, ValueIntContext, ValueStringContext, VariableDeclarationContext } from './AlfParser.js';
import { AlfListener } from './AlfListener.js';
import { AlfVisitor } from './AlfVisitor.js';
import * as fs from 'fs';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

let input: string = fs.readFileSync('./sample.txt').toString();
let inputStream: CodePointCharStream = CharStreams.fromString(input);
let lexer: AlfLexer = new AlfLexer(inputStream);
let tokenStream: CommonTokenStream = new CommonTokenStream(lexer);
let parser: AlfParser = new AlfParser(tokenStream);

let tree = parser.start();

abstract class ASTNode {
    constructor(){};
}
class StatementNode extends ASTNode {
    constructor(public readonly statement: ASTNode) {
        super();
    }
    toJSON() {
        /* TODO: Return here an object having the id "statement" and the statement a list of instructions */
    }
}
class DeclarationNode extends ASTNode {
    constructor(public readonly variable_type: string, public readonly variable: string, public readonly op: string, public readonly value: string|number) {
        super();
    }
    toJSON() {

        /* TODO: Return here an object having the id "declaration" and the following properties: variable_type, variable and value */
        
    }
}

class ValueNode extends ASTNode {
    constructor(public readonly value: number|string) {
        super();
    }
    toJSON() {
        /*TODO: Return here an object having the id "value" and the following properties: value */
        

    }
}
class TypeNode extends ASTNode {
    constructor(public readonly type_name: string) {
        super();
    }
    toJSON() {
        /* TODO: Return here an object having the id "type" and the following properties: type */
    }
}

class MyAlfVisitor extends AbstractParseTreeVisitor<ASTNode> implements AlfVisitor<ASTNode> {
    defaultResult() {
        return new StatementNode({} as ASTNode);
    }
    visitVariableDeclaration(ctx: VariableDeclarationContext): DeclarationNode {
        return new DeclarationNode(
            (this.visit(ctx.type()) as TypeNode).type_name,
            ctx.VARIABLE().text,
            ctx.EQ().text,
            (this.visit(ctx.value()) as ValueNode).value
        );
    }
    visitValueInt(ctx: ValueIntContext): ValueNode {
        return new ValueNode(
            parseInt(ctx.INT_NUMBER().text)
        );
    }
    visitValueFloat(ctx: ValueFloatContext): ValueNode {
        return new ValueNode(
            parseInt(ctx.FLOAT_NUMBER().text)
        );
    }
    visitValueString(ctx: ValueStringContext): ValueNode {
        return new ValueNode(
            ctx.STRING_TEXT().text
        );
    }
    visitTypeInt(ctx: TypeIntContext): TypeNode {
        return new TypeNode(
            ctx.INT().text
        )
    }
    visitTypeString(ctx: TypeStringContext): TypeNode {
        return new TypeNode(
            ctx.STRING().text
        )
    }
    visitTypeFloat(ctx: TypeFloatContext): TypeNode {
        return new TypeNode(
            ctx.FLOAT().text
        )
    }
}
const visitor = new MyAlfVisitor();
console.log(JSON.stringify(visitor.visit(tree), null, 4));
