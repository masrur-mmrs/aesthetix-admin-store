"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.POST = void 0;
const POST = async (req, res) => {
    // ...
    const idempotencyKeyService = req.scope.resolve("idempotencyKeyService");
    const headerKey = req.get("Idempotency-Key") || "";
    const idempotencyKey = await idempotencyKeyService
        .initializeRequest(headerKey, req.method, req.params, req.path);
    // ...
};
exports.POST = POST;
async function GET(req, res) {
    res.sendStatus(200);
}
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2N1c3RvbS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJTyxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQWtCLEVBQ2xCLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNO0lBQ04sTUFBTSxxQkFBcUIsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FFN0MsdUJBQXVCLENBQUMsQ0FBQTtJQUMxQixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFBO0lBRWxELE1BQU0sY0FBYyxHQUFHLE1BQU0scUJBQXFCO1NBQy9DLGlCQUFpQixDQUNoQixTQUFTLEVBQ1QsR0FBRyxDQUFDLE1BQU0sRUFDVixHQUFHLENBQUMsTUFBTSxFQUNWLEdBQUcsQ0FBQyxJQUFJLENBQ1QsQ0FBQTtJQUNILE1BQU07QUFDUixDQUFDLENBQUE7QUFsQlksUUFBQSxJQUFJLFFBa0JoQjtBQUVNLEtBQUssVUFBVSxHQUFHLENBQ3ZCLEdBQWtCLEVBQ2xCLEdBQW1CO0lBRW5CLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUxELGtCQUtDIn0=