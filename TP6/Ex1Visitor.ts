// Generated from ./Ex1.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ExpressionMultiplyContext } from "./Ex1Parser";
import { ExpressionDivisionContext } from "./Ex1Parser";
import { ExpressionRemContext } from "./Ex1Parser";
import { ExpressionAdditionContext } from "./Ex1Parser";
import { ExpressionSubtractionContext } from "./Ex1Parser";
import { ExpressionParanthesisContext } from "./Ex1Parser";
import { ExpressionBooleanContext } from "./Ex1Parser";
import { ExpressionValueContext } from "./Ex1Parser";
import { FunctionCallContext } from "./Ex1Parser";
import { ListValuesContext } from "./Ex1Parser";
import { ReturnStatementContext } from "./Ex1Parser";
import { EmptyReturnContext } from "./Ex1Parser";
import { MultilineProgContext } from "./Ex1Parser";
import { SinglelineProgContext } from "./Ex1Parser";
import { TypeIntContext } from "./Ex1Parser";
import { TypeFloatContext } from "./Ex1Parser";
import { TypeStringContext } from "./Ex1Parser";
import { TypeBooleanContext } from "./Ex1Parser";
import { VariableDeclarationContext } from "./Ex1Parser";
import { VariableFunctionCallContext } from "./Ex1Parser";
import { ListDeclarationContext } from "./Ex1Parser";
import { ExpressionOrContext } from "./Ex1Parser";
import { ExpressionAndContext } from "./Ex1Parser";
import { ExpressionNotContext } from "./Ex1Parser";
import { ExpressionBoolParanthesisContext } from "./Ex1Parser";
import { ExpressionBoolValueContext } from "./Ex1Parser";
import { FunctionParameterContext } from "./Ex1Parser";
import { DeclarationRuleContext } from "./Ex1Parser";
import { ExpressionRuleContext } from "./Ex1Parser";
import { ListRuleContext } from "./Ex1Parser";
import { FunctionRuleContext } from "./Ex1Parser";
import { AttributionRuleContext } from "./Ex1Parser";
import { VariableAttributionContext } from "./Ex1Parser";
import { ValueIntContext } from "./Ex1Parser";
import { ValueFloatContext } from "./Ex1Parser";
import { ValueStringContext } from "./Ex1Parser";
import { ValueBooleanContext } from "./Ex1Parser";
import { ValueVariableContext } from "./Ex1Parser";
import { FunctionContentContext } from "./Ex1Parser";
import { StartContext } from "./Ex1Parser";
import { StatementContext } from "./Ex1Parser";
import { DeclarationContext } from "./Ex1Parser";
import { TypeContext } from "./Ex1Parser";
import { ValueContext } from "./Ex1Parser";
import { ExpressionContext } from "./Ex1Parser";
import { Expression_booleanContext } from "./Ex1Parser";
import { AttributionContext } from "./Ex1Parser";
import { List_declarationContext } from "./Ex1Parser";
import { ValuesContext } from "./Ex1Parser";
import { Function_declarationContext } from "./Ex1Parser";
import { ParameterContext } from "./Ex1Parser";
import { Return_functionContext } from "./Ex1Parser";
import { Function_callContext } from "./Ex1Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Ex1Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface Ex1Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `expressionMultiply`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionMultiply?: (ctx: ExpressionMultiplyContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionDivision`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionDivision?: (ctx: ExpressionDivisionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionRem`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionRem?: (ctx: ExpressionRemContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionAddition`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionAddition?: (ctx: ExpressionAdditionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionSubtraction`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionSubtraction?: (ctx: ExpressionSubtractionContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionParanthesis`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionParanthesis?: (ctx: ExpressionParanthesisContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionBoolean`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionBoolean?: (ctx: ExpressionBooleanContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionValue`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionValue?: (ctx: ExpressionValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCall`
	 * labeled alternative in `Ex1Parser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `listValues`
	 * labeled alternative in `Ex1Parser.values`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListValues?: (ctx: ListValuesContext) => Result;

	/**
	 * Visit a parse tree produced by the `returnStatement`
	 * labeled alternative in `Ex1Parser.return_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by the `emptyReturn`
	 * labeled alternative in `Ex1Parser.return_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyReturn?: (ctx: EmptyReturnContext) => Result;

	/**
	 * Visit a parse tree produced by the `multilineProg`
	 * labeled alternative in `Ex1Parser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultilineProg?: (ctx: MultilineProgContext) => Result;

	/**
	 * Visit a parse tree produced by the `singlelineProg`
	 * labeled alternative in `Ex1Parser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSinglelineProg?: (ctx: SinglelineProgContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeInt`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeInt?: (ctx: TypeIntContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeFloat`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeFloat?: (ctx: TypeFloatContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeString`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeString?: (ctx: TypeStringContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeBoolean`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBoolean?: (ctx: TypeBooleanContext) => Result;

	/**
	 * Visit a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `Ex1Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `variableFunctionCall`
	 * labeled alternative in `Ex1Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableFunctionCall?: (ctx: VariableFunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by the `listDeclaration`
	 * labeled alternative in `Ex1Parser.list_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListDeclaration?: (ctx: ListDeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionOr`
	 * labeled alternative in `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionOr?: (ctx: ExpressionOrContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionAnd`
	 * labeled alternative in `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionAnd?: (ctx: ExpressionAndContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionNot`
	 * labeled alternative in `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionNot?: (ctx: ExpressionNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionBoolParanthesis`
	 * labeled alternative in `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionBoolParanthesis?: (ctx: ExpressionBoolParanthesisContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionBoolValue`
	 * labeled alternative in `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionBoolValue?: (ctx: ExpressionBoolValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionParameter`
	 * labeled alternative in `Ex1Parser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionParameter?: (ctx: FunctionParameterContext) => Result;

	/**
	 * Visit a parse tree produced by the `declarationRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclarationRule?: (ctx: DeclarationRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `expressionRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionRule?: (ctx: ExpressionRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `listRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListRule?: (ctx: ListRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionRule?: (ctx: FunctionRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `attributionRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributionRule?: (ctx: AttributionRuleContext) => Result;

	/**
	 * Visit a parse tree produced by the `variableAttribution`
	 * labeled alternative in `Ex1Parser.attribution`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableAttribution?: (ctx: VariableAttributionContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueInt`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueInt?: (ctx: ValueIntContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueFloat`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueFloat?: (ctx: ValueFloatContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueString`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueString?: (ctx: ValueStringContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueBoolean`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueBoolean?: (ctx: ValueBooleanContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueVariable`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueVariable?: (ctx: ValueVariableContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionContent`
	 * labeled alternative in `Ex1Parser.function_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionContent?: (ctx: FunctionContentContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStart?: (ctx: StartContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_boolean?: (ctx: Expression_booleanContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.attribution`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttribution?: (ctx: AttributionContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.list_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_declaration?: (ctx: List_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `values`
	 * labeled alternative in `Ex1Parser.startstartstatementstatementstatementstatementstatementdeclarationdeclarationtypetypetypetypevaluevaluevaluevaluevalueexpressionexpressionexpressionexpressionexpressionexpressionexpressionexpressionexpression_booleanexpression_booleanexpression_booleanexpression_booleanexpression_booleanattributionlist_declarationvaluesfunction_declarationparameterreturn_functionreturn_functionfunction_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValues?: (ctx: ValuesContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.function_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_declaration?: (ctx: Function_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.return_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_function?: (ctx: Return_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `Ex1Parser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call?: (ctx: Function_callContext) => Result;
}

