import { Controller, Get, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthenticatedGuard } from '../auth/guards/authenticated.guard';
import { Listing } from './listing.entity';
import { ListingService } from './listing.service';

interface ToggleResponse {
  status: 'REMOVE' | 'SET';
}

@Controller('listing')
export class ListingController {
  constructor(private readonly listingService: ListingService) {}

  @Get('summary')
  getSummary() {
    return this.listingService.getSummary();
  }

  @UseGuards(AuthenticatedGuard)
  @Post('toggle/:id')
  async toggleSaved(@Req() req: Request, @Param('id', ParseIntPipe) id: number): Promise<ToggleResponse> {
    const status = await this.listingService.toggleSaved(req.user.id, id);

    return { status };
  }

  @UseGuards(AuthenticatedGuard)
  @Get('saved')
  async getSaved(@Req() req: Request) {
    return this.listingService.getSavedForUser(req.user.id);
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    const item = await Listing.findOne(id);

    if (!item) {
      return null;
    }

    return { ...item, images: item.getImages() };
  }
}
