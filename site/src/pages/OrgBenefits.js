import { Link } from "react-router-dom"

/* can delete when finished */
export const OrgBenefitsPage = () => {

  return <div>

    <h1 className="heading anim-in">Organisational Benefits - Triple Bottom Line</h1>

    <h2>Introduction</h2>

    <p>In today’s rapidly evolving energy landscape, businesses face increasing pressure to adopt sustainable practices. Transitioning from non-renewable to renewable energy sources is not only an environmental imperative but a strategic business decision. For organisations aiming to achieve SDG 7 (Affordable and Clean Energy), making the switch to renewable energy offers substantial financial, operational, and reputational benefits.</p>

    <p>By adopting clean energy, companies can mitigate regulatory risks, control costs, enhance corporate reputation, and improve stakeholder relations. Leading global businesses are already setting the pace by transitioning to renewable energy, demonstrating the vast advantages this shift brings.</p>

    <h3>Benefits of Transitioning to Clean Energy for Businesses</h3>

    <ul>
      <li><strong>Lower energy bills:</strong> By reducing reliance on non-renewable energy sources, businesses can benefit from lower energy costs over time. For example, a study by the International Energy Agency (IEA) found that businesses that have invested in renewable energy have seen an average reduction in energy costs of 10-20%.</li>
      <li><strong>Hedging against price fluctuations:</strong> Clean energy sources like solar and wind can provide more stable energy prices compared to fossil fuels, which are subject to market volatility. According to the U.S. Energy Information Administration (EIA), the price of solar energy has declined by over 80% since 2010.</li>
      <li><strong>Energy efficiency:</strong> Implementing energy-efficient practices and technologies can further reduce energy consumption and costs. A study by the World Resources Institute (WRI) found that businesses can achieve an average energy savings of 20-30% by implementing energy-efficient measures.</li>
    </ul>

    <iframe src="https://ourworldindata.org/grapher/solar-pv-prices-vs-cumulative-capacity?tab=chart" loading="lazy" style={{ 'width': '100%', 'height': 600, 'border': '0px none'}} allow="web-share; clipboard-write"></iframe>

    <h3>Improved Energy Security</h3>
    <ul>
      <li><strong>Reduced dependence on foreign energy sources:</strong> Transitioning to clean energy can reduce reliance on imported fossil fuels, enhancing energy security. For example, many European countries have increased their investments in renewable energy to reduce their dependence on Russian natural gas.</li>
      <li><strong>Resilience to supply chain disruptions:</strong> Distributed renewable energy systems can provide greater resilience to supply chain disruptions and natural disasters. For example, during Hurricane Sandy, many businesses in the affected areas were able to continue operations thanks to their on-site solar power systems.</li>
    </ul>

    <h3>Enhanced Brand Reputation</h3>
    <ul>
        <li><strong>Attracting environmentally conscious consumers:</strong> Businesses that demonstrate a commitment to sustainability can appeal to a growing market of environmentally conscious consumers. A study by Cone Communications found that 83% of consumers would switch brands if they knew the other brand was more sustainable.</li>
        <li><strong>Improving investor relations:</strong> Investors are increasingly seeking companies with strong environmental, social, and governance (ESG) credentials. A study by Morgan Stanley found that companies with strong ESG ratings outperformed the market by 4% over a five-year period.</li>
    </ul>

    <h3>Increased Investor Appeal</h3>

    <ul>
        <li><strong>Access to green financing:</strong> Businesses that invest in clean energy can access a growing range of green financing options, including green bonds and sustainable loans. According to the Climate Bonds Initiative, the global green bond market reached $1.1 trillion in 2021.</li>
        <li><strong>Enhanced valuation:</strong> Companies with strong sustainability profiles may be valued higher by investors. A study by McKinsey found that companies with strong ESG performance outperformed the market by 5% over a five-year period.</li>
    </ul>

    <h3>Access to Government Incentives</h3>

    <ul>
        <li><strong>Tax credits and subsidies:</strong> Many governments offer tax credits, subsidies, and other incentives to encourage businesses to adopt clean energy. For example, the U.S. federal government offers a tax credit for investments in solar energy.</li>
        <li><strong>Regulatory benefits:</strong> Businesses that comply with environmental regulations may enjoy certain advantages, such as expedited permitting processes.</li>
    </ul>

    <h3>Regulatory Compliance & Risk Mitigation</h3>

    <ul>
        <li>Governments worldwide are introducing stricter environmental regulations. Companies that proactively switch to renewable energy are better positioned to comply with current and future regulations, reducing the risk of penalties and benefiting from available incentives.</li>
        <li><strong>Avoidance of Carbon Taxes:</strong> With increasing regulations aimed at curbing carbon emissions, businesses that rely on fossil fuels face the risk of higher carbon taxes. Switching to renewables can offset this risk.</li>
        <li><strong>Government Incentives:</strong> Many governments offer financial incentives, such as tax credits, for companies that invest in renewable energy projects.</li>
        <li><strong>Example:</strong> Apple aims to make its entire supply chain carbon-neutral by 2030, reducing its exposure to future regulatory changes while also benefiting from current subsidies and tax breaks.</li>
    </ul>

    <h3>Enhanced Employee and Stakeholder Engagement</h3>
    <p>Adopting renewable energy fosters a culture of sustainability within a business, which improves employee morale and satisfaction. Companies committed to sustainability also find it easier to attract and retain top talent, particularly millennials and Gen Z, who prioritise environmental values in the workplace.</p>

    <Link to="/case-studies">Continue to Case Studies</Link>

  </div>
}