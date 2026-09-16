import https from 'https';

/**
 * IndexNow Submission Utility (Bing / Yandex / Seznam)
 * Submit updated or new URLs to IndexNow API.
 * Usage: npx ts-node scripts/indexnow-submit.ts https://jichangsou.com/airport/twilight
 */

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '';
const HOST = process.env.INDEXNOW_HOST || 'jichangsou.com';

export async function submitIndexNow(urlList: string[]) {
  if (!INDEXNOW_KEY) {
    console.warn('[IndexNow] INDEXNOW_KEY is not set in environment. Skipping submission.');
    return;
  }

  if (!urlList || urlList.length === 0) {
    console.log('[IndexNow] No URLs provided for submission.');
    return;
  }

  const payload = JSON.stringify({
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList: urlList,
  });

  const options = {
    hostname: 'api.indexnow.org',
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload),
    },
  };

  const req = https.request(options, (res) => {
    console.log(`[IndexNow] Submission HTTP Status: ${res.statusCode}`);
    res.on('data', (d) => process.stdout.write(d));
  });

  req.on('error', (e) => {
    console.error(`[IndexNow] Error submitting URLs: ${e.message}`);
  });

  req.write(payload);
  req.end();
}

// CLI Execution support
if (require.main === module) {
  const urls = process.argv.slice(2);
  if (urls.length > 0) {
    console.log(`[IndexNow] Submitting ${urls.length} URLs to IndexNow...`);
    submitIndexNow(urls);
  } else {
    console.log('[IndexNow] CLI Usage: npx tsx scripts/indexnow-submit.ts <url1> <url2>');
  }
}
