// Generated from ./Ex1.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `Ex1Parser`.
 */
export interface Ex1Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `expressionMultiply`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionMultiply?: (ctx: ExpressionMultiplyContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionMultiply`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionMultiply?: (ctx: ExpressionMultiplyContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionDivision`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionDivision?: (ctx: ExpressionDivisionContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionDivision`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionDivision?: (ctx: ExpressionDivisionContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionRem`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionRem?: (ctx: ExpressionRemContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionRem`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionRem?: (ctx: ExpressionRemContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionAddition`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionAddition?: (ctx: ExpressionAdditionContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionAddition`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionAddition?: (ctx: ExpressionAdditionContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionSubtraction`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionSubtraction?: (ctx: ExpressionSubtractionContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionSubtraction`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionSubtraction?: (ctx: ExpressionSubtractionContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionParanthesis`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionParanthesis?: (ctx: ExpressionParanthesisContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionParanthesis`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionParanthesis?: (ctx: ExpressionParanthesisContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionBoolean`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionBoolean?: (ctx: ExpressionBooleanContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionBoolean`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionBoolean?: (ctx: ExpressionBooleanContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionValue`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionValue?: (ctx: ExpressionValueContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionValue`
	 * labeled alternative in `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionValue?: (ctx: ExpressionValueContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCall`
	 * labeled alternative in `Ex1Parser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCall`
	 * labeled alternative in `Ex1Parser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `listValues`
	 * labeled alternative in `Ex1Parser.values`.
	 * @param ctx the parse tree
	 */
	enterListValues?: (ctx: ListValuesContext) => void;
	/**
	 * Exit a parse tree produced by the `listValues`
	 * labeled alternative in `Ex1Parser.values`.
	 * @param ctx the parse tree
	 */
	exitListValues?: (ctx: ListValuesContext) => void;

	/**
	 * Enter a parse tree produced by the `returnStatement`
	 * labeled alternative in `Ex1Parser.return_function`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by the `returnStatement`
	 * labeled alternative in `Ex1Parser.return_function`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by the `emptyReturn`
	 * labeled alternative in `Ex1Parser.return_function`.
	 * @param ctx the parse tree
	 */
	enterEmptyReturn?: (ctx: EmptyReturnContext) => void;
	/**
	 * Exit a parse tree produced by the `emptyReturn`
	 * labeled alternative in `Ex1Parser.return_function`.
	 * @param ctx the parse tree
	 */
	exitEmptyReturn?: (ctx: EmptyReturnContext) => void;

	/**
	 * Enter a parse tree produced by the `multilineProg`
	 * labeled alternative in `Ex1Parser.start`.
	 * @param ctx the parse tree
	 */
	enterMultilineProg?: (ctx: MultilineProgContext) => void;
	/**
	 * Exit a parse tree produced by the `multilineProg`
	 * labeled alternative in `Ex1Parser.start`.
	 * @param ctx the parse tree
	 */
	exitMultilineProg?: (ctx: MultilineProgContext) => void;

	/**
	 * Enter a parse tree produced by the `singlelineProg`
	 * labeled alternative in `Ex1Parser.start`.
	 * @param ctx the parse tree
	 */
	enterSinglelineProg?: (ctx: SinglelineProgContext) => void;
	/**
	 * Exit a parse tree produced by the `singlelineProg`
	 * labeled alternative in `Ex1Parser.start`.
	 * @param ctx the parse tree
	 */
	exitSinglelineProg?: (ctx: SinglelineProgContext) => void;

	/**
	 * Enter a parse tree produced by the `typeInt`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeInt?: (ctx: TypeIntContext) => void;
	/**
	 * Exit a parse tree produced by the `typeInt`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeInt?: (ctx: TypeIntContext) => void;

	/**
	 * Enter a parse tree produced by the `typeFloat`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeFloat?: (ctx: TypeFloatContext) => void;
	/**
	 * Exit a parse tree produced by the `typeFloat`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeFloat?: (ctx: TypeFloatContext) => void;

	/**
	 * Enter a parse tree produced by the `typeString`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeString?: (ctx: TypeStringContext) => void;
	/**
	 * Exit a parse tree produced by the `typeString`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeString?: (ctx: TypeStringContext) => void;

	/**
	 * Enter a parse tree produced by the `typeBoolean`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	enterTypeBoolean?: (ctx: TypeBooleanContext) => void;
	/**
	 * Exit a parse tree produced by the `typeBoolean`
	 * labeled alternative in `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	exitTypeBoolean?: (ctx: TypeBooleanContext) => void;

	/**
	 * Enter a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `Ex1Parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `variableDeclaration`
	 * labeled alternative in `Ex1Parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `variableFunctionCall`
	 * labeled alternative in `Ex1Parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterVariableFunctionCall?: (ctx: VariableFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `variableFunctionCall`
	 * labeled alternative in `Ex1Parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitVariableFunctionCall?: (ctx: VariableFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `listDeclaration`
	 * labeled alternative in `Ex1Parser.list_declaration`.
	 * @param ctx the parse tree
	 */
	enterListDeclaration?: (ctx: ListDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `listDeclaration`
	 * labeled alternative in `Ex1Parser.list_declaration`.
	 * @param ctx the parse tree
	 */
	exitListDeclaration?: (ctx: ListDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionOr`
	 * labeled alternative in `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 */
	enterExpressionOr?: (ctx: ExpressionOrContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionOr`
	 * labeled alternative in `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 */
	exitExpressionOr?: (ctx: ExpressionOrContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionAnd`
	 * labeled alternative in `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 */
	enterExpressionAnd?: (ctx: ExpressionAndContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionAnd`
	 * labeled alternative in `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 */
	exitExpressionAnd?: (ctx: ExpressionAndContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionNot`
	 * labeled alternative in `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 */
	enterExpressionNot?: (ctx: ExpressionNotContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionNot`
	 * labeled alternative in `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 */
	exitExpressionNot?: (ctx: ExpressionNotContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionBoolParanthesis`
	 * labeled alternative in `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 */
	enterExpressionBoolParanthesis?: (ctx: ExpressionBoolParanthesisContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionBoolParanthesis`
	 * labeled alternative in `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 */
	exitExpressionBoolParanthesis?: (ctx: ExpressionBoolParanthesisContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionBoolValue`
	 * labeled alternative in `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 */
	enterExpressionBoolValue?: (ctx: ExpressionBoolValueContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionBoolValue`
	 * labeled alternative in `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 */
	exitExpressionBoolValue?: (ctx: ExpressionBoolValueContext) => void;

	/**
	 * Enter a parse tree produced by the `functionParameter`
	 * labeled alternative in `Ex1Parser.parameter`.
	 * @param ctx the parse tree
	 */
	enterFunctionParameter?: (ctx: FunctionParameterContext) => void;
	/**
	 * Exit a parse tree produced by the `functionParameter`
	 * labeled alternative in `Ex1Parser.parameter`.
	 * @param ctx the parse tree
	 */
	exitFunctionParameter?: (ctx: FunctionParameterContext) => void;

	/**
	 * Enter a parse tree produced by the `declarationRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterDeclarationRule?: (ctx: DeclarationRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `declarationRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitDeclarationRule?: (ctx: DeclarationRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterExpressionRule?: (ctx: ExpressionRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitExpressionRule?: (ctx: ExpressionRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `listRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterListRule?: (ctx: ListRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `listRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitListRule?: (ctx: ListRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `functionRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterFunctionRule?: (ctx: FunctionRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `functionRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitFunctionRule?: (ctx: FunctionRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `attributionRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterAttributionRule?: (ctx: AttributionRuleContext) => void;
	/**
	 * Exit a parse tree produced by the `attributionRule`
	 * labeled alternative in `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitAttributionRule?: (ctx: AttributionRuleContext) => void;

	/**
	 * Enter a parse tree produced by the `variableAttribution`
	 * labeled alternative in `Ex1Parser.attribution`.
	 * @param ctx the parse tree
	 */
	enterVariableAttribution?: (ctx: VariableAttributionContext) => void;
	/**
	 * Exit a parse tree produced by the `variableAttribution`
	 * labeled alternative in `Ex1Parser.attribution`.
	 * @param ctx the parse tree
	 */
	exitVariableAttribution?: (ctx: VariableAttributionContext) => void;

	/**
	 * Enter a parse tree produced by the `valueInt`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValueInt?: (ctx: ValueIntContext) => void;
	/**
	 * Exit a parse tree produced by the `valueInt`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValueInt?: (ctx: ValueIntContext) => void;

	/**
	 * Enter a parse tree produced by the `valueFloat`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValueFloat?: (ctx: ValueFloatContext) => void;
	/**
	 * Exit a parse tree produced by the `valueFloat`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValueFloat?: (ctx: ValueFloatContext) => void;

	/**
	 * Enter a parse tree produced by the `valueString`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValueString?: (ctx: ValueStringContext) => void;
	/**
	 * Exit a parse tree produced by the `valueString`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValueString?: (ctx: ValueStringContext) => void;

	/**
	 * Enter a parse tree produced by the `valueBoolean`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValueBoolean?: (ctx: ValueBooleanContext) => void;
	/**
	 * Exit a parse tree produced by the `valueBoolean`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValueBoolean?: (ctx: ValueBooleanContext) => void;

	/**
	 * Enter a parse tree produced by the `valueVariable`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValueVariable?: (ctx: ValueVariableContext) => void;
	/**
	 * Exit a parse tree produced by the `valueVariable`
	 * labeled alternative in `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValueVariable?: (ctx: ValueVariableContext) => void;

	/**
	 * Enter a parse tree produced by the `functionContent`
	 * labeled alternative in `Ex1Parser.function_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionContent?: (ctx: FunctionContentContext) => void;
	/**
	 * Exit a parse tree produced by the `functionContent`
	 * labeled alternative in `Ex1Parser.function_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionContent?: (ctx: FunctionContentContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.start`.
	 * @param ctx the parse tree
	 */
	enterStart?: (ctx: StartContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.start`.
	 * @param ctx the parse tree
	 */
	exitStart?: (ctx: StartContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 */
	enterExpression_boolean?: (ctx: Expression_booleanContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.expression_boolean`.
	 * @param ctx the parse tree
	 */
	exitExpression_boolean?: (ctx: Expression_booleanContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.attribution`.
	 * @param ctx the parse tree
	 */
	enterAttribution?: (ctx: AttributionContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.attribution`.
	 * @param ctx the parse tree
	 */
	exitAttribution?: (ctx: AttributionContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.list_declaration`.
	 * @param ctx the parse tree
	 */
	enterList_declaration?: (ctx: List_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.list_declaration`.
	 * @param ctx the parse tree
	 */
	exitList_declaration?: (ctx: List_declarationContext) => void;

	/**
	 * Enter a parse tree produced by the `values`
	 * labeled alternative in `Ex1Parser.startstartstatementstatementstatementstatementstatementdeclarationdeclarationtypetypetypetypevaluevaluevaluevaluevalueexpressionexpressionexpressionexpressionexpressionexpressionexpressionexpressionexpression_booleanexpression_booleanexpression_booleanexpression_booleanexpression_booleanattributionlist_declarationvaluesfunction_declarationparameterreturn_functionreturn_functionfunction_call`.
	 * @param ctx the parse tree
	 */
	enterValues?: (ctx: ValuesContext) => void;
	/**
	 * Exit a parse tree produced by the `values`
	 * labeled alternative in `Ex1Parser.startstartstatementstatementstatementstatementstatementdeclarationdeclarationtypetypetypetypevaluevaluevaluevaluevalueexpressionexpressionexpressionexpressionexpressionexpressionexpressionexpressionexpression_booleanexpression_booleanexpression_booleanexpression_booleanexpression_booleanattributionlist_declarationvaluesfunction_declarationparameterreturn_functionreturn_functionfunction_call`.
	 * @param ctx the parse tree
	 */
	exitValues?: (ctx: ValuesContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.function_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_declaration?: (ctx: Function_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.function_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_declaration?: (ctx: Function_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.return_function`.
	 * @param ctx the parse tree
	 */
	enterReturn_function?: (ctx: Return_functionContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.return_function`.
	 * @param ctx the parse tree
	 */
	exitReturn_function?: (ctx: Return_functionContext) => void;

	/**
	 * Enter a parse tree produced by `Ex1Parser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `Ex1Parser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;
}

