import { Link } from "react-router-dom";

/* can delete when finished */
export const CaseStudiesPage = () => {
  return (
    <div>
      <h1 className="heading anim-in">
        Best Practice Examples for
        <br />
        Transitioning to Clean Energy
      </h1>

      <h2>IKEA<sup>1</sup></h2>

      <img src="pages/case-studies/ikea.png" width="150" />

      <ul>
        <li>
          <strong>Implementation:</strong> IKEA committed to producing more
          renewable energy than it consumes by investing in wind farms, solar
          power, and energy efficiency projects. They have installed solar
          panels on their stores and distribution centres and have invested in
          wind energy across several countries.
        </li>
        <li>
          <strong>Impact:</strong>
          <ul>
            <li>
              <strong>Cost Savings:</strong> IKEA's renewable energy investments
              reduced electricity costs significantly, as wind and solar power
              became cheaper than traditional energy in many regions.
            </li>
            <li>
              <strong>Energy Independence:</strong> By generating more renewable
              energy than they use, IKEA has achieved energy independence,
              protecting themselves from price volatility in the global energy
              markets.
            </li>
            <li>
              <strong>Brand Reputation:</strong> IKEA’s renewable energy
              initiatives have strengthened their brand image as a leader in
              sustainability, aligning with consumer values and driving sales.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Google<sup>2</sup></h2>
      <img src="pages/case-studies/google.svg" width="150" />

      <ul>
        <li>
          <strong>Implementation:</strong> Google achieved 100% renewable energy
          matching in 2017 and continues to invest in wind and solar power. They
          also plan to become completely carbon-free by 2030 by switching all
          operations and data centers to renewable energy sources.
        </li>
        <li>
          <strong>Impact:</strong>
          <ul>
            <li>
              <strong>Cost Savings:</strong> Google's large-scale renewable
              energy purchases helped reduce electricity costs by securing
              long-term power purchase agreements (PPAs) at lower rates than
              traditional energy sources.
            </li>
            <li>
              <strong>Corporate Responsibility:</strong> This transition
              enhanced Google's corporate sustainability image, attracting
              customers and investors interested in ethical business practices.
            </li>
            <li>
              <strong>Operational Efficiency:</strong> Google's investment in
              energy-efficient technologies (like AI-powered cooling systems in
              data centers) has further reduced energy consumption.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Apple<sup>3</sup></h2>
      <img src="pages/case-studies/apple.svg" width="150" />

      <ul>
        <li>
          <strong>Implementation:</strong> Apple transitioned to 100% renewable
          energy for all its facilities worldwide in 2018. This includes Apple
          stores, offices, and data centers in 43 countries, along with the
          entire supply chain.
        </li>
        <li>
          <strong>Impact:</strong>
          <ul>
            <li>
              <strong>Environmental Footprint:</strong> Apple reduced its carbon
              emissions by millions of metric tons per year through renewable
              energy initiatives.
            </li>
            <li>
              <strong>Supply Chain Leadership:</strong> Apple’s push for
              suppliers to use renewable energy has influenced many of its
              partners to adopt greener practices, amplifying the impact across
              the entire tech industry.
            </li>
            <li>
              <strong>Cost Reduction:</strong> Renewable energy investments
              helped Apple hedge against fluctuating energy costs, lowering
              operational expenses in the long term.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Amazon<sup>4</sup></h2>

      <img src="pages/case-studies/amazon.svg" width="150" />

      <ul>
        <li>
          <strong>Implementation:</strong> Amazon has committed to powering its global
          infrastructure with 100% renewable energy by 2025. They have invested
          heavily in wind and solar projects and have built on-site solar
          systems in their fulfillment centers.
        </li>
        <li>
          <strong>Impact:</strong>
          <ul>
            <li>
              <strong>Cost Stability:</strong> By investing in renewable energy projects like
              wind farms and solar arrays, Amazon has locked in predictable,
              long-term energy costs, which is especially beneficial as their
              infrastructure grows.
            </li>
            <li>
              <strong>Environmental Impact:</strong> The switch to renewables significantly
              reduces Amazon’s carbon footprint, helping them meet their climate
              pledge to be net-zero carbon by 2040.
            </li>
            <li>
              <strong>Supply Chain Influence:</strong> Like Apple, Amazon is encouraging its
              supply chain partners to adopt renewable energy practices,
              magnifying the environmental benefits.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Microsoft<sup>5</sup></h2>
      <img src="pages/case-studies/microsoft.svg" width="150" />

      <ul>
        <li>
          <strong>Implementation:</strong> Microsoft has been carbon-neutral since 2012 and
          committed to using 100% renewable energy by 2025. They are purchasing
          large amounts of wind and solar energy, along with improving energy
          efficiency in their operations.
        </li>
        <li>
          <strong>Impact:</strong>
          <ul>
            <li>
              <strong>Carbon Neutrality:</strong> Microsoft's renewable energy purchases,
              combined with energy efficiency improvements and carbon offset
              programs, have helped them maintain carbon neutrality.
            </li>
            <li>
              <strong>Energy Efficiency:</strong> Microsoft's use of AI-driven energy management
              in data centers has resulted in a reduction of both energy
              consumption and operational costs.
            </li>
            <li>
              <strong>Leadership in Sustainability:</strong> Microsoft’s renewable energy efforts
              have positioned them as a leader in corporate environmental
              responsibility, benefiting both their reputation and ability to
              attract sustainability-focused investors.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Conclusion and Path Forward</h2>
      <p>For large businesses and organizations, transitioning to renewable energy is no longer just an environmental responsibility—it’s a strategic imperative. The benefits extend beyond cost savings to encompass enhanced brand reputation, regulatory compliance, energy independence, and increased stakeholder engagement. As the global economy continues to shift towards sustainability, organizations that lead the way in renewable energy adoption will not only contribute to the realization of SDG 7 but also ensure their long-term success
        <sup>6, 7, 8</sup>.
      </p>

      <Link to="/org-benefits">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
      </svg>
        &nbsp;
        Back to Organisation Benefits
      </Link>

      <hr />

    <ul className="unstyled references">
        <li>[1] IKEA, Sustainability Commitments.https://www.ikea.com/us/en/this-is-ikea/sustainable-everyday/.</li>
        <li>[2] Google, Sustainability Report : https://sustainability.google/.</li>
        <li>[3] Apple Inc., Environmental Progress Report  https://www.apple.com/environment/.</li>
        <li>[4] Amazon, Sustainability. https://sustainability.aboutamazon.com/.</li>
        <li>[5] Microsoft, Emissions Impact Dashboard https://www.microsoft.com/en-us/sustainability/emissions-impact-dashboard.</li>       
        <li>[6] International Renewable Energy Agency (IRENA) (2024), <i>Renewable Power Generation Costs</i>. Available at: https://www.irena.org/Statistics/View-Data-by-Topic/Costs/Renewable-Power-Generation-Costs Accessed: 21st october 2024</li>
        <li>[7] Carbon Trust, Business Benefits of Renewable Energy https://www.carbontrust.com/what-we-do/advisory-and-assurance/business-benefits-of-renewable-energy</li>
        <li>[8] World Energy Data, World Energy Data 2023  https://www.worldenergydata.org/.</li>
    </ul>

    </div>
  );
};
