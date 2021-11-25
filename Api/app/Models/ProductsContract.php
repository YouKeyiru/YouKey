<?php

namespace App\Models;

use App\Services\ImageService;
use Illuminate\Database\Eloquent\Builder;

/**
 * @method static Builder whereCode($code)
 * Class ProductsContract
 * @package App\Models
 */
class ProductsContract extends Model
{
    //
    protected $table = 'products_contract';

    const HIDE_TYPE = 0; // state 不显示
    const DIS_TYPE = 1; // state 显示

    public function getImageAttribute($value)
    {
        if ($value) {
            $value = ImageService::setHost('admin') .'storage/' . $value;
        }
        return $value;
    }
}
