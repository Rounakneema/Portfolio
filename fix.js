const fs = require('fs');
let content = fs.readFileSync('D:/Protfolio/project-sites/src/app/revealr/page.tsx', 'utf8');

const badBlock =               <div>
                <h3 className="text-xl font-bold text-lime-400 mb-3">Who built Revealr?</h3>
                <p className="text-zinc-300 leading-relaxed text-lg">
                  Revealr was designed and engineered by Rounak Neema as part of a research initiative into high-performance network security tooling and stateful attack surface management.
                </p>
              </div>
            </div>

              <div>
                <h3 className="text-xl font-bold text-lime-400 mb-3">Who built Revealr?</h3>
                <p className="text-zinc-300 leading-relaxed text-lg">
                  Revealr was designed and engineered by Rounak Neema as part of a research initiative into high-performance network security tooling and stateful attack surface management.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </ScrollReveal>;

const goodBlock =               <div>
                <h3 className="text-xl font-bold text-lime-400 mb-3">Who built Revealr?</h3>
                <p className="text-zinc-300 leading-relaxed text-lg">
                  Revealr was designed and engineered by Rounak Neema as part of a research initiative into high-performance network security tooling and stateful attack surface management.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>;

content = content.replace(badBlock, goodBlock);
fs.writeFileSync('D:/Protfolio/project-sites/src/app/revealr/page.tsx', content);
