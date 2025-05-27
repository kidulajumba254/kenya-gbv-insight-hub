
# Kenya GBV Insight Hub

## Analytics-Driven Violence Prevention Platform

The Kenya GBV Insight Hub is a comprehensive analytics platform designed to track, analyze, and predict Gender-Based Violence (GBV) trends across Kenya. This platform empowers policymakers, NGOs, law enforcement agencies, and community organizations to make data-driven decisions for effective resource allocation and targeted interventions.

## 🌟 Features

### 📊 Dashboard Analytics
- Real-time incident tracking and reporting
- Key performance indicators (KPIs) monitoring
- Monthly trend analysis with visual charts
- Case resolution rate tracking
- Emergency hotline call monitoring

### 🗺️ Geographic Analysis
- County-by-county incident mapping
- High-risk area identification
- Geographic trend visualization
- Resource allocation mapping

### 📈 Trend Analysis
- Historical data analysis
- Seasonal pattern identification
- Incident type distribution
- Comparative analytics across regions

### 🎯 Resource Allocation
- Data-driven resource recommendations
- Budget allocation insights
- Service provider network optimization
- Community program effectiveness tracking

### 📝 Incident Reporting
- Secure incident reporting interface
- Multi-channel reporting support
- Case management integration
- Follow-up tracking system

### 🔮 Predictive Analytics
- AI-powered incident forecasting
- Risk factor analysis
- Intervention recommendation engine
- Early warning system for high-risk periods

## 🎨 Design Features

- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Roboto Typography**: Clean, readable font family throughout the platform
- **Kenyan Cultural Elements**: Design elements celebrating Kenyan heritage
- **Accessible Design**: WCAG compliant interface design

## 🚀 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and building
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: shadcn/ui component library
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React icons
- **State Management**: React Query (TanStack Query)
- **Routing**: React Router DOM

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kenya-gbv-insight-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── Dashboard.tsx    # Main dashboard component
│   ├── GeographicView.tsx
│   ├── TrendAnalysis.tsx
│   ├── ResourceAllocation.tsx
│   ├── IncidentReporting.tsx
│   └── PredictiveAnalytics.tsx
├── pages/               # Page components
│   ├── Index.tsx        # Main application page
│   └── NotFound.tsx     # 404 error page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── styles/              # Global styles
└── main.tsx            # Application entry point
```

## 📊 Data Sources

The platform is designed to integrate with multiple data sources:

- **Government Databases**: Ministry of Gender, Children and Social Development
- **Law Enforcement**: National Police Service incident reports
- **Healthcare Systems**: Hospital and clinic records (anonymized)
- **NGO Networks**: Partner organization reporting systems
- **Community Reports**: Citizen reporting platforms
- **Emergency Services**: National emergency hotline data

## 🔐 Security & Privacy

- **Data Anonymization**: All personal identifiers are removed or encrypted
- **Access Control**: Role-based access to sensitive information
- **Audit Trail**: Complete logging of all data access and modifications
- **Compliance**: Adherence to Kenya Data Protection Act 2019
- **Secure Communication**: HTTPS encryption for all data transmission

## 🎯 Target Users

### Policymakers
- Government officials at national and county levels
- Ministry of Gender, Children and Social Development
- Kenya National Commission on Human Rights

### Law Enforcement
- National Police Service
- Directorate of Criminal Investigations (DCI)
- County security committees

### NGOs & Civil Society
- Gender-focused organizations
- Women's rights groups
- Community-based organizations
- International development partners

### Healthcare Providers
- Public health officials
- Medical professionals
- Counseling services
- Trauma centers

## 📈 Impact Metrics

The platform tracks several key impact indicators:

- **Response Time**: Average time from incident report to intervention
- **Resolution Rate**: Percentage of cases successfully resolved
- **Prevention Effectiveness**: Reduction in repeat incidents
- **Resource Efficiency**: Cost per intervention and outcome achieved
- **Geographic Coverage**: Percentage of population with access to services

## 🤝 Contributing

We welcome contributions from developers, data scientists, and domain experts. Please read our contributing guidelines and code of conduct before submitting pull requests.

### Development Guidelines
1. Follow TypeScript best practices
2. Use semantic commit messages
3. Write comprehensive tests
4. Maintain documentation
5. Respect data privacy requirements

## 📱 Mobile Responsiveness

The platform is fully responsive and optimized for:
- Desktop computers (1024px and above)
- Tablets (768px - 1023px)
- Mobile phones (320px - 767px)

## 🌍 Localization

Currently supported languages:
- English (Primary)
- Swahili (Planned)
- Local languages (Future releases)

## 📞 Support & Contact

For technical support, feature requests, or data partnership inquiries:

- **Email**: support@gbv-insight-hub.ke
- **Phone**: +254-XXX-XXXXXX
- **Website**: https://gbv-insight-hub.ke
- **Documentation**: https://docs.gbv-insight-hub.ke

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Ministry of Gender, Children and Social Development of Kenya
- UN Women Kenya
- Kenya National Commission on Human Rights
- Partner NGOs and civil society organizations
- Technology partners and open-source contributors

## 🚀 Deployment

### Production Deployment
The application can be deployed on any static hosting service:

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service of choice:
   - Vercel
   - Netlify
   - AWS S3 + CloudFront
   - Digital Ocean

### Environment Variables
Configure the following environment variables for production:
- `VITE_API_BASE_URL`: Backend API endpoint
- `VITE_SUPABASE_URL`: Supabase project URL (if using)
- `VITE_SUPABASE_ANON_KEY`: Supabase anonymous key

## 📋 Roadmap

### Phase 1 (Current)
- ✅ Core analytics dashboard
- ✅ Geographic visualization
- ✅ Trend analysis
- ✅ Predictive modeling

### Phase 2 (Q1 2025)
- 🔄 Real-time data integration
- 🔄 Mobile application
- 🔄 SMS reporting system
- 🔄 Multi-language support

### Phase 3 (Q2 2025)
- 📅 Advanced AI models
- 📅 Community engagement tools
- 📅 Integration with existing systems
- 📅 Training and capacity building

---

**Together, we can build a safer Kenya for all women and girls.**

*This platform is developed with love and commitment to ending gender-based violence in Kenya.*
