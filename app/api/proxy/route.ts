// app/api/proxy/route.ts
export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const targetUrl = searchParams.get("url");

	if (!targetUrl) {
		return new Response("Missing target url", { status: 400 });
	}

	const res = await fetch(targetUrl, {
		headers: {
			Referer: "https://redbean.tech/illustrate/v3",
		},
	});

	return new Response(res.body, {
		status: res.status,
		headers: {
			"Content-Type":
				res.headers.get("Content-Type") || "application/octet-stream",
			"Cache-Control": "public, max-age=60",
		},
	});
}
