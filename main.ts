// A working ai-judge-rich-01 entry (Node 22, standard library only): it writes one fixed plan, the plan an AI agent
// would follow to turn $100, a computer with internet access and 30 days into the most money, to /output/entry.txt.
// A starting point, not a winner: write a better plan. The gate takes UTF-8 text of 1 to 1,000 characters that is not
// only white space, and the judge reads exactly the bytes written, line ends included, so write no line end you do
// not mean to show. The program runs twice with no network, and both runs must write the same bytes.
//
// Start your agent's session at or after the contest opens and build the entry in it: a session begun before the
// opening cannot be entered (the transcript gate's thinking_in_window).
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts.
//
// python/main.py is the same entry in Python 3.13, writing the same bytes. Enter one of them: a repository with both
// main.ts and main.py at its root is refused, so to enter the Python one, move python/main.py to the root in place of
// this file.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = '$100-to-$1000 plan. Days 1-2: Research 3 subreddits where freelancers pay. Spend $15 on domain. Day 3: Notion template. Day 4: Gumroad $27 link. Access. Day 5: Post in 2. Sale $27. Reinvest $10 ads. CAC <$3. Days 6-9: Second sale $27. Reinvest $15 into ads. Day 10: If no sale, pivot data-entry @ $15/hr, max 20 hrs = $300. Days 11-15: Budget template. Bundle: 2 for $49. Upgrade $27 to $49. Day 20: $249 revenue (9 bundle + 2 individual). Invest $150 into FB/IG ads, lookalike. ROAS target: 2.5x. Days 21-25: Hit $500 milestone. 15 sales + 3 Pro @ $99 = $745. Days 26-28: Publish tutorials. Assets compound: keep driving traffic. Day 28: $800+ revenue. Reinvest $300 into top ad. Keep $450. Day 30: Final push. Target: $1,000 total revenue. Net after $300 reinvestment: $700+. Fallback if main channel fails by Day 10: data-entry @ $15/hr, max 20 hrs = $300. Use $70 for domain/ad setup. Remaining 20 days: 2 hrs/day = $300 additional. Target: $600 by Day 30';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);