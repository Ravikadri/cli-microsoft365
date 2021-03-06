import commands from '../../commands';
import PeriodBasedReport from '../../../base/PeriodBasedReport';

const vorpal: Vorpal = require('../../../../vorpal-init');

class YammerReportDeviceUsageDistributionUserCountsCommand extends PeriodBasedReport {
  public get name(): string {
    return commands.YAMMER_REPORT_DEVICEUSAGEDISTRIBUTIONUSERCOUNTS;
  }

  public get usageEndpoint(): string {
    return 'getYammerDeviceUsageDistributionUserCounts';
  }

  public get description(): string {
    return 'Gets the number of users by device type';
  }

  public commandHelp(args: {}, log: (help: string) => void): void {
    log(vorpal.find(this.name).helpInformation());
    log(
      `  Examples:
      
    Gets the number of users by device type for
    the last week
      m365 ${this.name} --period D7

    Gets the number of users by device type for the last week and exports the
    report data in the specified path in text format
      m365 ${this.name} --period D7 --output text > "deviceusagedistributionusercounts.txt"

    Gets the number of users by device type for the last week and exports the
    report data in the specified path in json format
      m365 ${this.name} --period D7 --output json > "deviceusagedistributionusercounts.json"
`);
  }
}

module.exports = new YammerReportDeviceUsageDistributionUserCountsCommand();

