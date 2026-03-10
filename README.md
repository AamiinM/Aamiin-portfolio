# Aamiin Portfolio

Premium multi-page portfolio built with **Next.js + TypeScript**.

## Quick preview (local)

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open in your browser:
   ```
   http://localhost:3000
   ```

## If you see `about:blank#blocked`

That usually means the link was opened inside a blocked in-app/webview context.

Try this instead:

1. Copy and paste this directly into **Chrome/Safari/Firefox**:
   ```
   http://127.0.0.1:3000
   ```
2. If using phone + same Wi-Fi, run dev server on all interfaces:
   ```bash
   npm run dev -- --hostname 0.0.0.0 --port 3000
   ```
   Then open from phone browser:
   ```
   http://<YOUR_COMPUTER_LOCAL_IP>:3000
   ```
3. Do **not** open localhost links from inside chat-app embedded browsers.

## Routes

- `/` Home
- `/about`
- `/projects`
- `/projects/[slug]`
- `/cinematography`
- `/gear`
- `/journal`
- `/journal/[slug]`
- `/playground`
- `/stack`
- `/now`
- `/favorites`
- `/contact`

## Production build

```bash
npm run build
npm run start
```

Then open `http://localhost:3000`.
