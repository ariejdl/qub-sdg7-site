import { scrollTop } from "../utils"

export const ProgressPage = () => {

  return <div>

    <h1 className="heading anim-in">The progress towards reaching SDG 7</h1>

    <p>Firstly, we are on track with 17 % of all the 17 SDG goals. Many of the key targets have a deadline of 2030, although this has been a slow process recently disrupted by the COVID-19 Pandemic and ongoing international conflicts. However, this indicates the effort we need to take to reach the targets during the next six years (United Nations, 2024a, p.4)<sup>1</sup>.</p>
      
    <p>Despite the limited adoption of sustainable practices to reach these goals, SDG 7 is one of the targets with the greatest development so far. Even if there is still a long way to go, two out of the five targets are on track with the process, two have a moderate process and one has a marginal process<sup>1</sup>.</p>
      
    <h3>Tracking SDG 7 Data Sustainable Development Report 2023</h3>

    <iframe width="400" height="260" 
            src="https://www.youtube.com/embed/fzujXqh4FnY" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
    </iframe>
    <p className="figure-text">International Renewable Energy Agency (2023) Tracking SDG 7: The Energy Progress Report, YouTube. Available at https://www.youtube.com/watch?v=fzujXqh4FnY (Accessed 18 October 2024).</p>

    <br />
    <br />

    <h3>How we are on track with SDG 7</h3>

    <br />
    <img src="pages/progress/1.png" style={{ width: '80%' }} />

    <p className="figure-text">Figure 1: own representation based on the United Nations, 2024, p. 44. </p>

    <br />
    <br />

    <h3>What we have achieved (2015-2022)</h3>
    <ol>
      <li>The number of people living without access to electricity decreased by 273 million.</li>
      <li>The number of individuals without clean cooking access has fallen by 0.7 million.</li>
      <li> The share of renewable energy consumption in the world’s total final energy consumption increased by 2 per cent, reaching 18.7 per cent.</li>
      <li>The proportion of energy consumed for electricity in the world’s final energy consumption for electricity has grown by 5.3 per cent, up to 28.2 per cent. Renewable electricity is the fastest developing sector<sup>1</sup>.</li>
    </ol>

    <h3>Current Situation of the SDG 7</h3>
    <p>Before we can adapt to a fully clean energy source, we need to supply the electricity needs of many. Around 685 million People still have no access to electricity worldwide. Furthermore, around 2.1 billion individuals cook with polluting stoves and fuels instead of having the chance to use clean cooking. One of the most affected regions is the Sub-Saharan<sup>1</sup>.</p>
 
    <iframe src="https://ourworldindata.org/grapher/share-of-the-population-with-access-to-electricity?tab=map" loading="lazy" style={{ 'width': '100%', 'height': 600, 'border': '0px none' }} allow="web-share; clipboard-write"></iframe>
    <p className="figure-text">Figure 2: Our World in Data 2021, https://ourworldindata.org/sdgs/affordable-clean-energy<sup>5</sup></p>

    <h3>What we need to do to - Challenges</h3>
    <p>To reach the targets by 2030 it’s necessary to increase the global electricity access by 1.08 per cent annually. This requires, above all, the adoption of policies and frameworks to regulate and control the process. Furthermore, the number of people using clean energy for cooking needs to be improved. Decentralisation of energy production as well as the fair division is a prerequisite for ensuring access for all<sup>2</sup>. To achieve this, it’s necessary to reduce our dependence on fossil fuels and to increase the storage capacity of renewables as well as the costs of producing clean energy to make it affordable<sup>2</sup>. In general, more renewable energy must be generated to cover the needed demand<sup>1</sup>.</p>
 
    <h3>How we can achieve the targets </h3>
    <p>Innovation, policy, and financial support are the key principles towards clean energy for all.  In detail, that means the Implementation of environmental policies to reach electrification for all. The enhancement of energy efficiency through direct investments<sup>3</sup> in technology<sup>4</sup>, Infrastructure and the support of different renewable energy projects through the enforcement of strategies consisting of for example subsidies and financial investment<sup>3</sup>. Finally, the support of Innovation is essential to ensure a successful process on the long term and to improve the energy efficiency<sup>1</sup>.</p>

    <br />
    <button onClick={() => scrollTop()}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
    </svg>
    &nbsp;
      Scroll to Top
    </button>

    <hr />

    <ul className="unstyled references">
      <li>[1] United Nations, (2024) The Sustainable Development Report 2024. Available at: https://unstats.un.org/sdgs/report/2024/The-Sustainable-Development-Goals-Report-2024.pdf (Accessed: 06 October 2024).  p. 4., 22-23, 44.</li>
      <li>[2] Luo, A. N. K., Soni, V., Keenan, B., Son, J., Taghartapeh, M.R., Morato, M.M., Poya, Y., Montanes R.M. (2023) Sustainable energy technologies for the Global Sounth: challenges and solutions towards achieving SDG 7. <i>Environmental Sciences</i>: Advances, 2(4), 570-585, p.571.doi: https://doi.org/10.1039/d2va00247g. </li>
      <li>[3] Azam, A (2024) ‘How Environmental Policy Stringency, Foreign Direct Investments, and Eco Innovation Supplement the Energy Transition: New Evidence from NICs’, <i>Sustainability</i>, vol. 16, no.17, pp. 3033. P.2. doi: https://doi.org/10.3390/su16073033 </li>
      <li>[4] Rasoulinezhad, E.; Taghizadeh-Hesary, F.; Sung, J.; Panthamit, N. (2020) Geopolitical risk and energy transition in Russia: Evidence from ARDL bounds testing method. Sustainability 2020, 12, 2689, p.11. Available at: https://www.mdpi.com/2071-1050/12/7/2689 (Accessed 10 October 2024).</li>
      <li>[5] Our World in Data (2021) Share of Population with access to electricity, 2021, Available at: https://ourworldindata.org/grapher/share-of-the-population-with-access-to-electricity?country=~TCD (Accessed: 20 October 2024).</li>
    </ul>

  </div>
}