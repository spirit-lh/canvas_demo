/**
 * 清除canvas
 */
export default function (context) {
    context && context.clearRect && context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}