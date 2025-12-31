#!/bin/bash

# Bash script to create the JSON data files for Moran Millers website
# Run this in the project root, it will create the files in src/data/
# (Note: The hooks expect files in src/data/, not src/pages/. If your folder is different, adjust DIR below.)

DIR="src/data"

mkdir -p "$DIR"

# 1. contactDetails.json
cat << 'EOF' > "$DIR/contactDetails.json"
{
  "address": "P.O. Box 44231 – 00100 Nairobi",
  "location": "Ngong–Kiserian Road, Kajiado County",
  "phone": "+254 700 281 281",
  "email": "millersmoran@gmail.com"
}
EOF

# 2. blogSummaries.json
cat << 'EOF' > "$DIR/blogSummaries.json"
[
  {
    "id": "uji-mix-intro",
    "title": "Introducing Moran Uji Mix – A Nutritious Twist to Your Morning Routine",
    "date": "2025-01-01",
    "excerpt": "Discover our new premium millet porridge blend designed for health-conscious families – rich in nutrients, quick to prepare, and perfect for all ages.",
    "slug": "introducing-moran-uji-mix"
  }
]
EOF

# 3. companyComparison.json
cat << 'EOF' > "$DIR/companyComparison.json"
[
  {
    "company": "Moran Millers",
    "quality": 5,
    "innovation": 5,
    "sustainability": 5,
    "goToMarket": 4
  },
  {
    "company": "Ajab",
    "quality": 5,
    "innovation": 3,
    "sustainability": 4,
    "goToMarket": 5
  }
]
EOF

# 4. products.json
cat << 'EOF' > "$DIR/products.json"
[
  {
    "id": "maize-grade1",
    "name": "Sifted Maize Flour (Grade 1)",
    "description": "Refined, consistent premium Grade 1 maize flour under the brand 'Moran'.",
    "packs": ["0.5kg", "1kg", "2kg", "5kg", "10kg", "45kg", "50kg"]
  },
  {
    "id": "maize-grade2",
    "name": "Whole Maize Meal (Grade 2)",
    "description": "Nutrient-rich whole maize meal.",
    "packs": ["1kg", "2kg", "5kg", "10kg", "50kg"]
  },
  {
    "id": "millet-flour",
    "name": "Millet Flour",
    "description": "Ideal for porridge, gluten-friendly millet flour.",
    "packs": ["0.5kg", "1kg", "2kg", "5kg", "10kg"]
  },
  {
    "id": "animal-feed",
    "name": "Animal Feed Byproducts",
    "description": "Nutritious maize bran & germ repurposed from milling.",
    "packs": ["50kg", "90kg"]
  },
  {
    "id": "uji-mix",
    "name": "Moran Uji Mix",
    "description": "Nutritious millet porridge blend – rich in fiber and minerals, convenient for health-conscious families.",
    "packs": ["0.5kg", "1kg", "2kg", "5kg", "10kg"],
    "featured": true
  },
  {
    "id": "custom-milling",
    "name": "Custom Milling",
    "description": "Custom milling services for farmers & traders (on request).",
    "packs": []
  }
]
EOF

# 5. impactPoints.json
cat << 'EOF' > "$DIR/impactPoints.json"
[
  {
    "title": "SDG 2 – Zero Hunger",
    "description": "Providing affordable, quality staples across counties to advance food security."
  },
  {
    "title": "SDG 8 – Decent Work & Economic Growth",
    "description": "Creating decent jobs for youth and women, with potential to employ up to 100 directly."
  },
  {
    "title": "SDG 12 – Responsible Consumption & Production",
    "description": "Waste reduction through circular economy – repurposing byproducts into animal feeds."
  },
  {
    "title": "Farmer Empowerment",
    "description": "Fair sourcing from smallholder farmers, consistent purchase volumes, and training partnerships."
  },
  {
    "title": "Community First",
    "description": "Supporting local farmers, creating jobs, and contributing to inclusive economic growth."
  }
]
EOF

# 6. investorInfo.json
cat << 'EOF' > "$DIR/investorInfo.json"
{
  "fundingGoal": "KES 20,000,000",
  "matchingFundsTarget": "EUR 100,000 (owners’ equity + external investors)",
  "useOfFunds": [
    { "item": "Milling equipment", "amount": "KES 2,000,000" },
    { "item": "Storage expansion", "amount": "KES 3,000,000" },
    { "item": "Huller engine", "amount": "KES 1,500,000" },
    { "item": "Premises improvements", "amount": "KES 1,000,000" },
    { "item": "Distribution vehicles", "amount": "KES 2,000,000" },
    { "item": "Working capital", "amount": "KES 2,500,000" }
  ],
  "financialOutlook": [
    { "year": 2025, "revenue": "KES 5,000,000", "netProfit": "KES 1,030,000" },
    { "year": 2026, "revenue": "KES 6,500,000", "netProfit": "KES 1,400,000" },
    { "year": 2027, "revenue": "KES 8,000,000", "netProfit": "KES 1,800,000" }
  ],
  "impactThesis": "Your capital helps scale production, create jobs, empower farmers, and expand affordable nutrition."
}
EOF

# 7. leadershipBios.json
cat << 'EOF' > "$DIR/leadershipBios.json"
[
  {
    "name": "Bryan Chebii",
    "title": "Chief Operating/Executive Officer",
    "bio": "Shareholder and Director in charge of Finance, Strategy, Quality, and Operations. Ensures day-to-day smooth running of the company."
  },
  {
    "name": "Hellen Serem",
    "title": "Chief HR & Administrative Officer",
    "bio": "Shareholder and Director in charge of Human Resources and Administration, including recruitment, training, welfare, and general operations."
  },
  {
    "name": "Josephat Ndege",
    "title": "Company Miller",
    "bio": "Oversees production to ensure flour complies with company quality standards."
  },
  {
    "name": "Albert Chepkisa",
    "title": "Mill Operator",
    "bio": "Maintains and operates milling equipment, including inspections and cleaning."
  },
  {
    "name": "Willianne Malonza",
    "title": "Factory Supervisor",
    "bio": "Supervises plant production operations and provides direction to employees."
  },
  {
    "name": "Jennifer Chepngeno",
    "title": "Finance and Administrative Assistant",
    "bio": "Handles company financial operations and general administration."
  }
]
EOF

# 8. dailySchedule.json
cat << 'EOF' > "$DIR/dailySchedule.json"
[
  {
    "time": "07:00",
    "activity": "Loading, fueling, truck cleaning, stock checks, and morning safety briefings"
  },
  {
    "time": "08:30–16:30",
    "activity": "Sales activities and dispatch"
  },
  {
    "time": "17:00–17:30",
    "activity": "Reconciliation and security checks"
  }
]
EOF

echo "All JSON files have been created in $DIR/"
