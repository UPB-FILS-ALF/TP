import { ASTNode, VariableNode } from "./index";
import symbol_tree from './index';
import { Expression, ValueNode, AttributionNode, FunctionCallNode, FunctionNode } from './index';

let results: string[] = [];
 
function writeThreeAddressCode (node: any)
{
    if (node.id === 'StatementsNode')
    {
        for (var statement of node.statements)
        {
            writeThreeAddressCode(statement);
        }
    } else if (node instanceof ValueNode || node instanceof VariableNode) {
        // TODO
    } else if (node instanceof Expression) {
        if (node.left !== undefined && node.right !== undefined)
        {
            // TODO    
        }
    } else if (node instanceof AttributionNode) {
        // TODO
    } else if (node instanceof FunctionCallNode) {
        // TODO
    } else (node instanceof FunctionNode)
    {
        // TODO
    }
}
writeThreeAddressCode(symbol_tree.ast); 
