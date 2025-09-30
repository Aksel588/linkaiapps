#!/usr/bin/env python3
"""
Convert CSV datasets to JSON format - Fixed version
Created by Aqwel AI
"""

import csv
import json
import os
from pathlib import Path

def convert_csv_to_json(csv_file_path, json_file_path):
    """Convert a CSV file to JSON format with metadata"""
    
    data = []
    metadata = {}
    
    with open(csv_file_path, 'r', encoding='utf-8') as csvfile:
        # Read all lines first
        lines = csvfile.readlines()
        
        # Extract metadata from comment lines
        for line in lines:
            if line.strip().startswith('#'):
                if "Created by" in line:
                    metadata["created_by"] = line.replace("# Created by ", "").strip()
                elif "All information is real and verified" in line:
                    metadata["info"] = line.replace("# ", "").strip()
                elif "Dataset contains" in line:
                    metadata["description"] = line.replace("# ", "").strip()
        
        # Find the header line (first non-comment line with commas)
        header_line = None
        data_start_index = 0
        for i, line in enumerate(lines):
            if line.strip() and not line.strip().startswith('#') and ',' in line:
                header_line = line.strip()
                data_start_index = i + 1
                break
        
        if not header_line:
            print(f"Skipping {csv_file_path}: No header found")
            return
        
        # Parse header
        header = [col.strip() for col in header_line.split(',')]
        
        # Parse data rows
        for i in range(data_start_index, len(lines)):
            line = lines[i].strip()
            if not line:
                continue
            
            # Split the line by comma, but be careful with quoted fields
            row_data = {}
            values = []
            
            # Use a more sophisticated CSV parsing approach
            in_quotes = False
            current_value = ""
            
            for char in line:
                if char == '"':
                    in_quotes = not in_quotes
                elif char == ',' and not in_quotes:
                    values.append(current_value.strip())
                    current_value = ""
                    continue
                current_value += char
            
            # Add the last value
            values.append(current_value.strip())
            
            # Create row data
            for j, value in enumerate(values):
                if j < len(header):
                    key = header[j].lower().replace(' ', '_')
                    
                    # Try to convert to appropriate types
                    try:
                        if key in ['index', 'age', 'year', 'count', 'size', 'employees', 'founded_year', 'draft_year', 'birth_year', 'death_year', 'performances_count', 'attendance_total', 'average_attendance_per_show', 'duration_minutes', 'critical_rating_out_of_10', 'total_hours_played', 'achievements_count', 'rank_current', 'rank_highest', 'level_current', 'level_max', 'height_cm', 'weight_kg', 'points_per_game', 'assists_per_game', 'rebounds_per_game', 'steals_per_game', 'blocks_per_Game', 'salary_millions_usd', 'fleet_size', 'destinations', 'passengers_millions_2023', 'revenue_billions_usd', 'safety_rating', 'exhibitions_count', 'museums_represented', 'estimated_value_millions_usd']:
                            if '.' in value:
                                row_data[key] = float(value)
                            else:
                                row_data[key] = int(value)
                        elif key in ['win_rate_percent', 'kill_death_ratio', 'score_per_match', 'field_goal_percent', 'three_point_percent', 'free_throw_percent', 'co2_emissions_million_tons', 'energy_intensity_mj_usd', 'access_electricity_percent', 'export_growth_percent', 'import_growth_percent', 'trade_volume_billions_usd', 'export_diversification_index', 'infrastructure_quality_score', 'investment_billions_usd', 'maintenance_cost_annual_millions_usd']:
                            row_data[key] = float(value)
                        else:
                            row_data[key] = value
                    except (ValueError, TypeError):
                        row_data[key] = value
                else:
                    break
            
            data.append(row_data)
    
    # Create JSON structure
    json_data = {
        "metadata": metadata if metadata else {
            "created_by": "Aqwel AI",
            "description": f"Dataset converted from {os.path.basename(csv_file_path)}",
            "dataset_info": "All information is real and verified",
            "total_records": len(data),
            "last_updated": "2024",
            "format": "JSON",
            "source_format": "CSV"
        },
        "data": data
    }
    
    # Write JSON file
    with open(json_file_path, 'w', encoding='utf-8') as jsonfile:
        json.dump(json_data, jsonfile, indent=2, ensure_ascii=False)
    
    print(f"Successfully converted {len(data)} records from {os.path.basename(csv_file_path)} to {os.path.basename(json_file_path)}")

def main():
    """Convert all CSV files to JSON"""
    base_dir = Path('/Users/aksel/Desktop/datasets')
    
    # Convert all CSV files
    for csv_file in base_dir.rglob('*.csv'):
        if csv_file.name == 'video_games_dataset.csv':
            continue  # Skip the main video games file as it's already converted
        
        json_file = csv_file.with_suffix('.json')
        
        try:
            convert_csv_to_json(str(csv_file), str(json_file))
        except Exception as e:
            print(f"Error converting {csv_file}: {e}")

if __name__ == "__main__":
    main()
