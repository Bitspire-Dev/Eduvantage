import React from 'react';

export function Subjects(){
	return (
		<section id="subjects" className="section">
			<div className="subjects-decorations" aria-hidden="true">
				<span className="line-grid" />
				<div className="symbols" aria-hidden="true">
					<span className="symbol s1">π</span>
					<span className="symbol s2">2+2</span>
					<span className="symbol s3">x</span>
					<span className="symbol s4">y</span>
					<span className="symbol s5">√</span>
					<span className="symbol s6">∞</span>
					<span className="symbol s7">Σ</span>
					<span className="symbol s8">a</span>
					<span className="symbol s9">b²</span>
					<span className="symbol s10">?</span>
					<span className="symbol s11">Δ</span>
					<span className="symbol s12">θ</span>
					<span className="symbol s13">%</span>
					<span className="symbol s14">÷</span>
					<span className="symbol s15">×</span>
					<span className="symbol s16">≈</span>
					<span className="symbol s17">≤</span>
					<span className="symbol s18">≥</span>
					<span className="symbol s19">λ</span>
					<span className="symbol s20">γ</span>
				</div>
			</div>
			<div className="container">
				<header className="section-header">
					<h2>Zakres nauczania</h2>
					<p className="muted">Skupiamy się wyłącznie na dwóch filarach – matematyce i języku angielskim. Dzięki temu zapewniamy głęboką specjalizację.</p>
				</header>
				<div className="grid-auto-fit">
					<div className="card">
						<h3 className="m-0 mb-3 text-lg font-semibold">Matematyka</h3>
						<ul className="list-check text-sm">
							<li>Szkoła podstawowa – nadrabianie braków</li>
							<li>Egzamin ósmoklasisty – strategie i typowe zadania</li>
							<li>Matura podstawowa – schematy i pewność rozwiązań</li>
							<li>Matura rozszerzona – zadania otwarte, analiza krokowa</li>
						</ul>
					</div>
					<div className="card">
						<h3 className="m-0 mb-3 text-lg font-semibold">Język angielski</h3>
						<ul className="list-check text-sm">
							<li>Fundamenty gramatyczne i słownictwo</li>
							<li>Konwersacje – przełamywanie bariery mówienia</li>
							<li>Egzamin ósmoklasisty – format i techniki</li>
							<li>Matura podstawowa – pisanie, czytanie, słuchanie</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
